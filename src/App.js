import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <div className="clearfix"></div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
