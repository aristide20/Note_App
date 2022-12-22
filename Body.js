import React from 'react'

export default function Body(props) {
   

    return(
        <div className='body'>
            <div className='body-icones'>
                <div className='bouton-icone'>Write</div>
                <div className='bouton-icone'>Preview</div>
                <div className='bouton-icone'>...</div>
                <div className='bouton-icone'>...</div>
                <div className='bouton-icone'>...</div>
                <div className='bouton-icone'>...</div>
            </div>
            <div className='body-text'>
                <textarea className='text'
                          name='text'
                          value={props.currentNote.body}
                          onChange={props.updatenote}>
                            {props.currentNote.body} 
                </textarea>
            </div>
        </div>
   )
}
