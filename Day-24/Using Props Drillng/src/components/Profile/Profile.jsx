import React from "react";
import Home from "../Home/Home";

const Profile = ({ loggedIn, setloggedIn }) => {
  return (
    <div>
      {loggedIn ? (
        <p>Profile</p>
      ) : (
        <Home loggedIn={loggedIn} setloggedIn={setloggedIn} />
      )}
    </div>
  );
};

export default Profile;
