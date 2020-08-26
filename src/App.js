import "./App.css";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import ListingDetails from "./components/pages/ListingDetails";
import Listings from "./components/pages/Listings";
import LoadingContext from "./context/loadingContext";
import LogIn from "./components/modals/LogIn";
import NavBar from "./components/NavBar";
import SignUp from "./components/modals/SignUp";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => {
    console.log("started loading");
    setIsLoading(true);
  };

  const hideLoading = () => {
    console.log("finished loading");
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading: true,
        onStartedLoading: showLoading,
        onFinishedLoading: hideLoading,
      }}
    >
      <div id="main-wrapper">
        {/* <!-- Preloader - style you can find in spinners.css --> */}
        <div id="preloader" style={isLoading ? {} : { display: "none" }}>
          <div className="preloader">
            <span></span>
            <span></span>
          </div>
        </div>

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
    </LoadingContext.Provider>
  );
}

export default App;
