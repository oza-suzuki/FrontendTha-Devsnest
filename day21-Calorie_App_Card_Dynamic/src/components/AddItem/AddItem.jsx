import React, { useState } from "react";
import "./AddItem.css";

const AddItem = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");

  const handleSubmit = (e) => {
    addItem({ title, calorie });
    setTitle("");
    setCalorie("");
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <div className="AddItem">
        <div className="input">
          <input
            type="text"
            className="card_input"
            placeholder="Item name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="input">
          <input
            type="number"
            className="card_input"
            placeholder="Calorie name"
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="Add_button">
        <button onClick={handleSubmit}>Add Item</button>
      </div>
    </div>
    // </form>
  );
};

export default AddItem;
