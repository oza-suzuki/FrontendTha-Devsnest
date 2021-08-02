import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions/action";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3 style={{ display: "inline-block" }}>{todo.title}</h3>
          <button
            class="btn btn-warning"
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
