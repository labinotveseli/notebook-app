import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [searchInput, setSearchInput] = useState("");
  const [setShowAddForm] = useState(false);
  const [displayedNotes, setDisplayedNotes] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setDisplayedNotes(updatedNotes);
    setShowAddForm(false);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((n) => n.title !== note.title);
    setNotes(updatedNotes);
    setDisplayedNotes(updatedNotes);
    setSearchedNotes(searchedNotes.filter((n) => n.title !== note.title));
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput) {
      const filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedNotes(filtered);
      setDisplayedNotes(filtered);
    } else {
      setSearchedNotes([]);
      setDisplayedNotes(notes);
    }
  };

  useEffect(() => {
    setDisplayedNotes(notes);
  }, [notes]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
              <button type="submit" className="btn btn-primary ml-2">
                Search
              </button>
            </div>
          </form>
          {searchInput && searchedNotes.length > 0 ? (
            <div>
              <h3>Searched Notes</h3>
              <ul className="list-group">
                {searchedNotes.map((note, index) => (
                  <li className="list-group-item" key={index}>
                    <div>
                      <h5>{note.title}</h5>
                      <div className="text-muted">
                        <small>
                          <strong>Category:</strong> {note.category}
                        </small>
                        <br />
                        <small>
                          <strong>Date:</strong> {note.date}
                        </small>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            searchInput && <p>No notes found.</p>
          )}
          {!searchInput && (
            <div>
              <h3>All Notes</h3>
              <ul className="list-group">
                {displayedNotes.map((note, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <div>
                      <h5 className="note-title">{note.title}</h5>
                      <div className="text-muted">
                        <small>
                          <strong>Category:</strong> {note.category}
                        </small>
                        <br />
                        <small>
                          <strong>Date:</strong> {note.date}
                        </small>
                      </div>
                    </div>
                    <button
                      className="btn btn-danger btn-sm ml-2"
                      onClick={() => deleteNote(note)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-md-8">
          <h1>My Note</h1>
          <h4 className="mt-3">Category • Date</h4>
          {showForm && <NoteForm addNote={addNote} />}
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close Form" : "Add Note"}
            </button>
            <div style={{ width: "20px" }}></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
