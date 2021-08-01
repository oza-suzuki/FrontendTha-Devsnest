import React from "react";
import "./Home.css";

function Home({ loggedIn, setloggedIn }) {
  // console.log(loggedIn);
  // console.log(setloggedIn);
  // const [loggedIn, setloggedIn] = useState(false);
  const toggleLoggin = () => {
    setloggedIn(!loggedIn);
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <div>If not logged in cant access, Profile & Dashboard</div>
      <button onClick={toggleLoggin}>{loggedIn ? "Logout" : "Login"} </button>
    </div>
  );
}

export default Home;
