import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const newNote = {
        title,
        category,
        date,
      };
      addNote(newNote);
      setTitle("");
      setCategory("Personal");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
          <option value="Education">Learning</option>
          <option value="Health">Health</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
