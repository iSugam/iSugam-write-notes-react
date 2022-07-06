import React from 'react'

function CreateArea() {
  return (
    <div>
        <form>
            <input type="text" name= "title" placeholder='Title of the note'/>
            <textarea name="content" id="" cols="8" rows="4" placeholder='Write your content...'></textarea>
            <button>ADD ITEM</button>
        </form>
    </div>
  )
}

export default CreateArea