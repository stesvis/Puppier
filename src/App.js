import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
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
