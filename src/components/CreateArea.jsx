import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CreateArea({ addOnClick }) {
    const [notes, setNotes] = useState({
        title:'',
        content:''
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setNotes(currentValue =>({...currentValue, [name]: value}))
    }
  return (
    <div>
        <form className='form'>
            <input 
                onChange={handleChange} 
                type="text" name= "title" 
                placeholder='Title of the note' 
                value={notes.title}
            />

            <textarea onChange={handleChange} 
                name="content" cols="8" rows="4" 
                placeholder='Write your content...' 
                value={notes.content}>
            </textarea>

            <Fab color="info" onClick={(e) => {
                e.preventDefault()
                addOnClick(notes)
                setNotes({
                    title:'',
                    content:''
                })
                }}>
                <AddIcon />
            </Fab>
        </form>
    </div>
  )
}

export default CreateArea