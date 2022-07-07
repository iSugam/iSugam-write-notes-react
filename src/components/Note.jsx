import React, { useState } from 'react';
import { Zoom } from '@mui/material';

function Note({ title, content, deleteOnClick, id }) {
const [expand, setExpand] = useState(true);

  const expanded = () => {
    setExpand(false);
  }

  return (
    <Zoom  in={expand}>
      <div className='notes'>
          <div className="title">
              <h3>{title}</h3>
              <button onClick={() => {
                expanded
                deleteOnClick(id);
              }}>X</button>
          </div>
      
          <p>{content}</p>
      </div>
    </Zoom>
  )
}

export default Note