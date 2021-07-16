import React, { useState } from "react";
import "./RenderItem.css";


const RenderItem = ({item, index, updateItem, removeItem}) => {
  // console.log(item);
  // console.log(index);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="render">
      <div className="card">
        <div className="card_body">
          {isEditing ? (
            <input
              className="card_input"
              type="text"
              value={item.title}
              onChange={(e) => updateItem(index, { title: e.target.value })}
            />
          ) : (
            <h5>Item = {item.title}</h5>
          )}
          {isEditing ? (
            <input
              className="card_input"
              type="number"
              value={item.calorie}
              onChange={(e) => updateItem(index, { calorie: e.target.value })}
            />
          ) : (
            <h5>Calorie = {item.calorie}</h5>
          )}
        </div>
        <div className="card_buttons">
          <button style={{backgroundColor:"red"}} onClick={() => removeItem(index)}>
            Delete
          </button>
          <button style={{backgroundColor:"orange"}} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderItem;
