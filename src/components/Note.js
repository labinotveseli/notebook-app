import React from "react";

const Note = ({ note, deleteNote }) => {
  const handleDeleteNote = () => {
    deleteNote(note);
  };

  return (
    <div className="bg-light p-2 mb-2">
      <div>
        <strong>{note.title}</strong>
        <button
          type="button"
          className="btn btn-danger btn-xsm ml-2"
          onClick={handleDeleteNote}
        >
          Delete
        </button>
      </div>
      <div>
        <small>{note.category}</small> • <small>{note.date}</small>
      </div>
    </div>
  );
};

export default Note;
