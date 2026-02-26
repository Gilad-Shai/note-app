import React from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onDelete }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="note-card">
      <div className="note-card-header">
        <span className="note-date">{formatDate(note.createdAt)}</span>
        <button
          className="delete-btn"
          onClick={() => onDelete(note.id)}
          aria-label="Delete note"
        >
          &times;
        </button>
      </div>
      <p className="note-content">{note.content}</p>
    </div>
  );
};

export default NoteCard;