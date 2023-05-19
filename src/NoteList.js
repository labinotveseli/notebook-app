import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
