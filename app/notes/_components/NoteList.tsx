import { getNotes } from "@/app/services/notes";
import Link from "next/link";

interface NoteListProps {
  showImportant: boolean;
}

export default async function NoteList({ showImportant }: NoteListProps) {
  const notes = await getNotes(showImportant);

  return (
    <>
      <div className="mb-4">
        <Link
          href={showImportant ? "/notes" : "/notes?important=true"}
          className="text-blue-600 hover:underline"
        >
          {showImportant ? "show all" : "show important only"}
        </Link>
      </div>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border rounded p-3 hover:bg-gray-50">
            <Link
              href={`/notes/${note.id}`}
              className="text-blue-600 hover:underline"
            >
              {note.content}
            </Link>
            {note.important && (
              <strong className="ml-2 text-amber-600">(important)</strong>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
