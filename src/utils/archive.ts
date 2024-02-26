import JSZip from "jszip";

export interface FileTextMap {
  [fileName: string]: string;
}

// Default patterns to ignore when extracting text from a zip archive.
const DEFAULT_IGNORE_PATTERNS = [
  "__MACOSX",
  ".DS_Store",
  ".git",
  ".next",
  "node_modules",
  "pnpm-lock.yaml",
];

/**
 * Extracts the text contents of each file in a zip archive into a mapping of file names to their contents.
 * @param file The zip file to extract text from.
 * @returns A promise that resolves to an object containing the text contents of each file in the zip.
 */
export const extractTextFromArchive = async (
  file: Blob,
): Promise<FileTextMap> => {
  const zip = await JSZip.loadAsync(file);
  const files: FileTextMap = {};

  const ignoreRegExp = new RegExp(DEFAULT_IGNORE_PATTERNS.join("|"));

  const fileProcessingPromises = Object.entries(zip.files)
    .filter(
      ([relativePath, zipEntry]) =>
        !zipEntry.dir && !ignoreRegExp.test(relativePath),
    )
    .map(async ([relativePath, zipEntry]) => {
      files[relativePath] = await zipEntry.async("string");
    });

  await Promise.all(fileProcessingPromises);

  return files;
};
