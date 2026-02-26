import { useState, useEffect } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './App.css';

const STORAGE_KEY = 'notes-app-notes';

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Notes</h1>
        <p className="note-count">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</p>
      </header>
      <main className="app-main">
        <NoteInput onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </main>
    </div>
  );
}

export default App;