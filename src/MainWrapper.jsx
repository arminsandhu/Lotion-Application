import React from 'react';
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


function MainWrapper ( {currentNote, updateNote} ) {
    const { quill, quillRef } = useQuill();
    
    const edit = (part, value) => {
        updateNote({ ...currentNote, [part]: value, lastModified: Date.now()})
    }


    if(!currentNote) {
        return (
            <div>Select a note, or create a new one.</div>
        )
    }



    return(
        <div style={mainWrapper}>
            <div style={mainHeader}>
                <div style={mainTitle}>
                    <input 
                    type="text" 
                    id = "title" 
                    value={currentNote.title} 
                    onChange={(event) => edit("title", "test")} 
                    autoFocus/>
                    </div>
                <div style={saveOption} id="saveOption"><h4>Save</h4></div>
                <div style={deleteOption} id="deleteOption"><h4>Delete</h4></div>
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
            {/* <div style={mainBody}>
                <textarea placeholder="Select a note, or create a new one."/>
            </div> */}
        </div>
    )
}

export default MainWrapper;