import React, { useContext } from "react";
import Home from "../Home/Home";
import { UserContext } from "../../stateProvider/userContext";

const DashBoard = () => {
  const [loggedIn, setloggedIn] = useContext(UserContext);
  return (
    <div>
      {loggedIn ? (
        <h1>Dashboard: Private Route</h1>
      ) : (
        <Home loggedIn={loggedIn} setloggedIn={setloggedIn} />
      )}
    </div>
  );
};

export default DashBoard;
