import React, { createContext, useEffect, useState } from "react";


export const NotesContext = createContext(null);

function Notes({children}) {
  const initialNotes = [
    {
      title: "Title",
      content: "msg",
      id: Date.now(),
    },
  ];

  const [notes, setNotes] = useState(()=>{
    const result =localStorage.getItem('notes');
    return result ? JSON.parse(result) : [];
  });

  function addNote(newNote) {
    setNotes((prev) => [...prev, {...newNote}]);
  }

  function UpdateNote(id, note) {
    setNotes((prev)=>
      prev.map((val) => val.id === id ? {...val,content:note}: val ))
    
  }

  function DeleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

  return (
    <NotesContext.Provider value={{ notes, addNote, DeleteNote, UpdateNote }}>
    
      {children}
    </NotesContext.Provider>
  );
}

export default Notes;