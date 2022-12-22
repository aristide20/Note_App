import React, {useState} from 'react'; 
import './App.css';
import Slidebar from "./Slidebar";
import Body from "./Body";
import {nanoid} from 'nanoid'

export default function App() {

  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({})
  const [currentId, setCurrentId] = useState()
  const [numeroNote, setNumeroNote] = useState(0)

  function createNewnote(){
     const newNote = { id: nanoid(),
                       numero: numeroNote + 1,
                       active: true,
                       body: " # Type your Markdown Note here!!!!!!!"
     }
     setNotes([newNote, ...notes])
     setNotes(prevNotes => {return prevNotes.map(note => {
           return {...note, active: note.numero === prevNotes.length ? true : false }
     } )})
     setCurrentNote(newNote)
     setCurrentId(currentNote.id || "")
     setNumeroNote(prevNumero => (prevNumero + 1))
  }

  function updateNote(event){
   
    setCurrentNote(prevCurrentNote => { return {...prevCurrentNote, body: event.target.value}})
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        return note.id === currentNote.id ? currentNote : note
      })
    })
  }

  function selectNote(id){
      for(let k=0; k<notes.length; k++){
        const note = notes[k]
         if(note.id === id){
             setCurrentNote(note)
         }
      }
      setNotes(prevNotes => {
        return prevNotes.map(note => {
          return {...note, active: note.id === id ? true : false }
        })
      } ) 
  }

  console.log(notes)
  console.log(currentNote)

  return ( notes.length === 0 ?
    <div className='accueil' >
         <h1>Vous n'avez aucune Note!!!</h1>
         <button className='bouton1' onClick={createNewnote} > Créer une nouvelle Note </button>
    </div>
    :
    <div className="container">
         <div className="App">
              <Slidebar notes={notes}
                        createNewNote={createNewnote}
                        currentId={currentId} 
                        nombre={numeroNote}
                        selectNote={selectNote} />
              <Body currentNote={currentNote}
                    updatenote={updateNote}/>
         </div>
    </div>
  );
}
