import React, { useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';



const mainWrapper = {
    flex: "3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
};

// const firstText = {
//     color: "grey",
//     fontWeight: "normal",
// }

const mainHeader = {
    flex: "10",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottom: "2px solid #f2f2f2f5",
};

const mainBody = {
    flex: "80",
    display: "flex"
};

const mainTitle = {
    flex: "80",
    display: "flex"
}


const saveOption = {
    flex: "5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 5px 0px 5px"
}

const deleteOption = {
    flex: "5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 5px 0px 5px"

}

const startMessage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    fontSize: "30px"
}


function MainWrapper ( {currentNote, updateNote, delNote, saveNotes} ) {
    const { quill, quillRef } = useQuill();
    
    const [buttonText, setButton] = useState("Save")

    const [isEdit, setEdit] = useState(false)

    
    const edit = (part, value) => {
        updateNote({ ...currentNote, [part]: value, lastModified: Date.now()})
    }

    if(!currentNote) {
        return (
            <div style={startMessage}>Select a note, or create a new one.</div>
        )
    }

    const toggle = () => {
        setEdit(!isEdit)
        if(isEdit) {
            return "Save"
        }
        else {
            return "Edit"        }
    }


    return(
        <div style={mainWrapper}>
            <div style={mainHeader}>
                <div style={mainTitle}>
                    <input 
                    type="text" 
                    id = "main-title" 
                    value={currentNote.title} 
                    onChange={(event) => edit("title", event.target.value)} 
                    autoFocus/>
                    </div>
                <div 
                    style={saveOption} 
                    id="saveOption"
                    onClick={() => {saveNotes(currentNote); setButton(toggle());}}
                    ><h4>{buttonText}</h4></div>
                <div 
                    style={deleteOption} 
                    id="deleteOption" 
                    onClick={() => {delNote(currentNote.id); setEdit(false) ;setButton(toggle()); console.log(isEdit) }}
                    ><h4>Delete</h4>
                    </div>
            </div>
            <div style={mainBody}>
                <div style={{width: "100%", height: "100%"}}>
                <div 
                ref={quillRef} 
                placeholder="Your Note Here." 
                value={currentNote.body}
                onChange={(event) => edit("body", event.target.value)} 
                />
                </div>
            </div>
        </div>
    )
}

export default MainWrapper;