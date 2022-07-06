import React, { useState } from "react";
import "./styles.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [noteItems, setNoteItems] = useState([
    {
      title: "Note 1",
      content: "Note 1 content"
    }
  ]);

  const addItem = (notes) => {
    setNoteItems([
      ...noteItems,
      {
        title: notes.title,
        content: notes.content
      }
    ]);
  };

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
