import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
        <NoteList notes={notes} addNote={addNote} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
