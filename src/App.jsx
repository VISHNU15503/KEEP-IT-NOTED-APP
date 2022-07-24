import React from "react";
import Heading from "./Heading.jsx";
import Note from "./Note";
import Footer from "./Footer";
import TextBox from "./TextBox";




function App()
{
    const [notes,setNotes] = React.useState([]);

    function addNote(event,newNote)
    {
        setNotes((preValue)=>{
            if(newNote.title!=="" && newNote.content!=="") return [...preValue,newNote];
            else return preValue;
        });
        event.preventDefault();
    }

    function deleteNote(event,id){
        setNotes((preValue)=>{
            return preValue.filter((item,index)=>{
                return index!==id;
            })
        });
        event.preventDefault();
    }

    return <div>
        <Heading />
        <TextBox add={addNote} />
        {notes.map((note,index)=> <Note key={index} id={index} delete={deleteNote} title={note.title} content={note.content}/>)}
        <Footer />
    </div>;
}

export default App;
