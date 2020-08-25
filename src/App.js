import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import ListingDetails from "./components/pages/ListingDetails";
import Listings from "./components/pages/Listings";
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
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Listings} />
          <Route exact path="/listings/:id" component={ListingDetails} />
        </Switch>

        <LogIn />
        <SignUp />
      </div>
    </React.Fragment>
  );
}

export default App;
