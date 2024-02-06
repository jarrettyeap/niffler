import { FileInput } from "@/components/file-input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-extrabold">Niffler</h1>
      <div>
        <div className="flex gap-x-8 p-8">
          <FileInput label="Source" />
          <FileInput label="Candidate Submission" />
        </div>
      </div>

    </main>
  );
}
