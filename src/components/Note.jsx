import React from 'react'

function Note({ title, content, deleteOnClick, id }) {
  return (

    <div className='notes'>
        <div className="title">
            <h3>{title}</h3>
            <button onClick={() => deleteOnClick(id)}>X</button>
        </div>
    
        <p>{content}</p>
    </div>
  )
}

export default Note