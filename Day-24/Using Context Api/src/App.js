import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { UserProvider } from "./stateProvider/userContext";

function App() {
  // const [loggedIn, setloggedIn] = useState(false);
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <UserProvider>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>
          </UserProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
