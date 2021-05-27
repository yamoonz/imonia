import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Games from "./pages/Games";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/newgame" component={NewGame} />
        </Switch>
      </Router>
      <NewGame />
    </>
  );
}

export default App;
