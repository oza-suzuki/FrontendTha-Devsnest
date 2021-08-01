import React from "react";
import Home from "../Home/Home";

const DashBoard = ({ loggedIn, setloggedIn }) => {
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
