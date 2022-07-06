import React from 'react'

function Note({ title, content }) {
  return (
    <div className='container'>
        <div className='notes'>
            <div className="title">
                <h3>{title}</h3>
                <button>X</button>
            </div>
        
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Note