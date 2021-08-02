import "./App.css";
import { changeName, changeEmail } from "./actions/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  console.log("name", name);
  // console.log("email", email);
  return (
    <div className="App">
      <h1>INPUT</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              dispatch(changeName(e.target.value));
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              dispatch(changeEmail(e.target.value));
            }}
          />
        </div>
      </div>
      <h1>DATA</h1>
      <p>
        Username:<span>{name}</span>
      </p>
      <p>
        Email:<span>{email}</span>
      </p>
    </div>
  );
}

export default App;
