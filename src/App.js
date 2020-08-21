import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import HeadNavbar from "./components/HeadNavbar";
import Home from "./components/pages/Home";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <HeadNavbar />
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
