import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

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
      <CreateArea onAddClick={addItem} />
      {noteItems.map((item, index) => {
        const { title, content } = item;
        return (
          <Note
            key={index}
            title={title}
            content={content}
            ids={index}
            onDeleteClick={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
