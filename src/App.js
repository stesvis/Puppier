import "./App.css";

import { Route, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
