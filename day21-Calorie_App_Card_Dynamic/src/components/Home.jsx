import React, { useState } from "react";
import AddItem from "./AddItem/AddItem";
import RenderItem from "./RenderItem/RenderItem";

function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const removeItem = index => {
		setItems(items.filter((item, i) => i !== index));
	};

  return (
    <div>
      <AddItem addItem={addItem} />
      {items.length === 0 ? (
        <h3 style={{fontFamily: "monospace", fontSize: "30px", position:"relative", left:"80px"}}>Start Adding Items</h3>
      ) : (
        items.map((item, index) => {
          return (
            <RenderItem
              item={item}
              index={index}
              updateItem={updateItem}
              removeItem={removeItem}
            />
          );
        })
      )}
    </div>
  );
}

export default Home;
