import NotesWrapper from './NotesWrapper'
import MainWrapper from './MainWrapper'
import Header from './Header'
import React, { useState } from "react";
import uuid from 'react-uuid';
import ReactDOM from 'react-dom/client';

const bodyWrapper = {
    height: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "row"
};



const Body = ( ) => {
    const [notes, setNotes] = useState([]);

    const [currentNote, setCurrent] = useState(false);
  

  
    const addNewNote = () => {
      const newNote = {
        id: uuid(),
        title: "Untitled",
        lastModified: Date.now(),
        body: "...",
      };
      setNotes([newNote, ...notes])
      setCurrent(newNote.id)
  
    };


    const getCurrentNote = () => {
        return notes.find((note) => note.id === currentNote.id);
      };



    const updateNote = (theUpdated) => {
        const updatedArray = notes.map((note) => {
          if(note.id === currentNote.id) {
            return theUpdated;
          }
          return note;
        });
      setNotes(updatedArray);
    }




    return(
    <div style={bodyWrapper}>
        <NotesWrapper notes={notes} addNewNote={addNewNote} currentNote={currentNote} setCurrent={setCurrent}/>
        <MainWrapper currentNote={getCurrentNote} updateNote={updateNote}/>
    </div>
    )
}

export default Body;