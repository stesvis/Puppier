import "./App.css";

import { Route, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import ListingDetails from "./components/pages/ListingDetails";
import LogIn from "./components/modals/LogIn";
import NavBar from "./components/NavBar";
import React from "react";
import SignUp from "./components/modals/SignUp";

function App() {
  return (
    <React.Fragment>
      <div id="main-wrapper">
        <NavBar />
        <div className="clearfix"></div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route exact path="/listing-details/:id">
            <ListingDetails />
          </Route>
        </Switch>

        <LogIn />
        <SignUp />
      </div>
    </React.Fragment>
  );
}

export default App;
