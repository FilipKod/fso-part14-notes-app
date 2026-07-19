import { Suspense } from "react";
import NoteList from "./_components/NoteList";

const Notes = async ({
  searchParams,
}: {
  searchParams: Promise<{ important?: string }>;
}) => {
  const { important } = await searchParams;
  const showImportant = important === "true";

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <Suspense fallback={<p>loading notes... papa</p>}>
        <NoteList showImportant={showImportant} />
      </Suspense>
    </div>
  );
};

export default Notes;
