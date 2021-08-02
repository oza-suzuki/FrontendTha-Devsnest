import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions/action";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo...!"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      <button
        class="btn btn-dark"
        onClick={() => {
          setItem("");
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
        }}
      >
        Add
      </button>
      <button
        class="btn btn-secondary"
        onClick={() => {
          dispatch(loadTodo());
        }}
      >
        Load Todo
      </button>
    </div>
  );
};

export default AddTodo;
