import NotesWrapper from './NotesWrapper'
import MainWrapper from './MainWrapper'
import React, { useState } from "react";
import uuid from 'react-uuid';
import ReactDOM from 'react-dom/client';

const bodyWrapper = {
    height: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "row"
};

const Body = ( {showSidebar} ) => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []) ;

    const [currentNote, setCurrent] = useState(null);

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
      return notes.find((note) => note.id === currentNote);
    };

    const updateNote = (theUpdated) => {
      setNotes((prevNotes) => {
        return prevNotes.map(note => {
          if(note.id === theUpdated.id){
            return theUpdated;
          }
          return note;
        })
      })
    }

    const delNote = (theDeleted) => { 
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const noteToDeleteExists = savedNotes.some(note => note.id === theDeleted);
      if(noteToDeleteExists) {
        localStorage.setItem("notes", JSON.stringify(savedNotes.filter((note) => note.id !== theDeleted)))
      }
      setNotes(notes.filter((note) => note.id !== theDeleted))
    }

    const saveNotes = (theSaved) => {
      const preSavedNotes = JSON.parse(localStorage.getItem("notes"));
      var notesToSave;
      if(preSavedNotes) {
        const newNoteToSaveExists = preSavedNotes.some(note => note.id === theSaved.id);
        if(newNoteToSaveExists){
          notesToSave = preSavedNotes.map((note) => {
            if(note.id === theSaved.id){
              return theSaved;
            }
            return note;
          })
        }else{
          notesToSave = [theSaved, ...preSavedNotes]
        }
      }else{
        notesToSave = [theSaved];
      }

      localStorage.setItem("notes", JSON.stringify(notesToSave))
    }

    

    return(
    <div style={bodyWrapper}>
        {showSidebar && <NotesWrapper notes={notes} addNewNote={addNewNote} currentNote={currentNote} setCurrent={setCurrent}/>}
        <MainWrapper currentNote={getCurrentNote()} updateNote={updateNote} delNote={delNote} saveNotes={saveNotes}/>
    </div>
    )
}

export default Body;