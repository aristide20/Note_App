import React from 'react'

export default function Slidebar(props){

    const style1 = {backgroundColor: "rgb(81, 22, 136)",
                     color: "white" }
    const style2 = {backgroundColor: "white",
                     color: "black" }

    const noteElements = props.notes.map(note => {
           return <div key={note.id} 
                       className='note-bar' 
                       style={note.active ? style1 : style2}
                       onClick={() => props.selectNote(note.id)}>
                      <h5>Note {note.numero}</h5>
                  </div>
    })

    return (
        <div className='slidebar' >
            <div className='titre'>
                 <h3>Notes</h3>
                 <button className='bouton2' onClick={props.createNewNote}> + </button>
            </div>
            <div className='barre'>
                 {noteElements}
            </div>
        </div>
   )
}
