import React, { useState } from 'react'

function CreateArea({ addOnClick }) {
    const [notes, setNotes] = useState({
        title:'',
        content:''
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setNotes(currentValue =>({...notes, [name]: value}))
    }
  return (
    <div>
        <form>
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

            <button onClick={(e) => {
                e.preventDefault()
                addOnClick(notes)
                setNotes({
                    title:'',
                    content:''
                })
                }}>
                ADD ITEM
            </button>
        </form>
    </div>
  )
}

export default CreateArea