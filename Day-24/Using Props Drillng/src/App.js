import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home loggedIn={loggedIn} setloggedIn={setloggedIn} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/dashboard">
            <Dashboard loggedIn={loggedIn} setloggedIn={setloggedIn} />
          </Route>

          <Route path="/profile">
            <Profile loggedIn={loggedIn} setloggedIn={setloggedIn} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
