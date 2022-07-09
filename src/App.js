import React, { useState } from "react";
import "./styles.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  // State for saving the data in an array
  const [noteItems, setNoteItems] = useState([
    {
      title: "Note Title One",
      content: "Contents of the note."
    },
    {
      title: "Note Title Two",
      content: "Contents of the note."
    },
    {
      title: "Note Title Three",
      content: "Contents of the note."
    }
  ]);

  // For adding new notes
  const addItem = (notes) => {
    if(notes.title === "" || notes.content === "") return
    setNoteItems([...noteItems, notes]);
  };

  // For deleting existing notes
  const deleteItem = (id) => {
    setNoteItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };
  
  return (
    <div>
      <Header />
      <CreateArea addOnClick={addItem} />
      <div className='container'>
        {noteItems.map((item, index) => {
          const { title, content } = item;
          return (
            <Note
              key={index}
              title={title}
              content={content}
              id={index}
              deleteOnClick={deleteItem}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
