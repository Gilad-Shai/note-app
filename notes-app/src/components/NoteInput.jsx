import { useState } from "react";

export default function NoteInput({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle && !trimmedBody) return;
    onAdd({ title: trimmedTitle, body: trimmedBody });
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <h2>New Note</h2>
      <input
        type="text"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-input__title"
      />
      <textarea
        placeholder="Write your note here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="note-input__body"
        rows={4}
      />
      <button type="submit" className="note-input__submit">
        Add Note
      </button>
    </form>
  );
}