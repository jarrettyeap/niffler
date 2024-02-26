"use client";

import { FileInput } from "@/components/file-input";
import { Button } from "@/components/ui/button";
import { extractTextFromArchive } from "@/utils/archive";
import { cn } from "@/utils/styles";
import { ShuffleIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useState } from "react";

const ACCEPTED_FILE_TYPES = [".zip"];

export default function Home() {
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [candidateFile, setCandidateFile] = useState<File | null>(null);
  const [highlightSource, setHighlightSource] = useState(false);
  const [highlightCandidate, setHighlightCandidate] = useState(false);

  const handleFileChange =
    (setFileFn: React.Dispatch<React.SetStateAction<File | null>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files?.length) {
        setFileFn(event.target.files[0]);
      }
    };

  const handleCompare = async () => {
    if (!sourceFile) {
      setHighlightSource(true);
    }

    if (!candidateFile) {
      setHighlightCandidate(true);
    }

    if (!sourceFile || !candidateFile) {
      return;
    }

    // const sourceText = await extractTextFromArchive(sourceFile);
    // const candidateText = await extractTextFromArchive(candidateFile);
  };

  return (
    <main className="flex min-h-screen flex-col gap-y-4 p-8 lg:p-16">
      <h1 className="text-2xl font-extrabold text-center">🐀 Niffler</h1>
      <div>
        <p className="text-center">
          Upload the source file and the candidate submission to compare.
        </p>
        <p className="text-center font-mono text-sm">
          Only .zip files are supported at the moment.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col items-center sm-md:gap-y-8 lg:gap-x-8 lg:justify-center lg:flex-row">
          <div
            className={cn({
              "animate-wiggle": highlightSource,
            })}
            onAnimationEnd={() => setHighlightSource(false)}
          >
            <FileInput
              label="Source"
              accept={ACCEPTED_FILE_TYPES.join(",")}
              onChange={handleFileChange(setSourceFile)}
            />
          </div>
          <div
            className={cn({
              "animate-wiggle": highlightCandidate,
            })}
            onAnimationEnd={() => setHighlightCandidate(false)}
          >
            <FileInput
              label="Candidate Submission"
              accept={ACCEPTED_FILE_TYPES.join(",")}
              onChange={handleFileChange(setCandidateFile)}
            />
          </div>
        </div>
        <Button className="self-center" onClick={handleCompare}>
          <ShuffleIcon className="mr-2 h-4 w-4" /> Compare
        </Button>
      </div>
    </main>
  );
}
