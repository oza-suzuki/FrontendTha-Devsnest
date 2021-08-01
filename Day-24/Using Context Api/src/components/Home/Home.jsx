import React, { useContext } from "react";
import "./Home.css";
import { UserContext } from "../../stateProvider/userContext";

function Home() {
  const [loggedIn, setloggedIn] = useContext(UserContext);
  const toggleLoggin = () => {
    setloggedIn(!loggedIn);
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <div>If not logged in cant access, Profile & Dashboard</div>
      <button type="button" class="btn btn-primary" onClick={toggleLoggin}>
        {loggedIn ? "Logout" : "Login"}{" "}
      </button>
    </div>
  );
}

export default Home;
