import { Change, createTwoFilesPatch, diffLines } from "diff";

/**
 * Generates HTML diff between two strings.
 * @param sourceContent The source string to compare.
 * @param candidateContent The target string to compare against.
 * @returns The HTML representation of the diff.
 */
export const generateDiff = (
  sourceContent: string,
  candidateContent: string,
): Array<Change> => {
  return diffLines(sourceContent, candidateContent);
};

/**
 * Generates a patch string that can be applied to the source string to produce the candidate string.
 * @param source The source string to compare.
 * @param candidateContent The target string to compare against.
 * @returns The patch string.
 */
export const generatePatch = (
  source: { name: string; content: string },
  candidateContent: { name: string; content: string },
): string => {
  return createTwoFilesPatch(
    source.name,
    candidateContent.name,
    source.content,
    candidateContent.content,
  );
};
