import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Home = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="header_option">
          <h1>Home</h1>
        </div>
      </Link>

      <Link to="/about" className="link">
        <div className="header_option">
          <h1>About</h1>
        </div>
      </Link>
      
      <Link to="/profile" className="link">
        <div className="header_option">
          <h1>Profile</h1>
        </div>
      </Link>

      <Link to="/dashboard" className="link">
        <div className="header_option">
          <h1>Dashboard</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
