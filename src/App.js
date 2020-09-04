import "./App.css";
import "react-image-lightbox/style.css";

import { Link, Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/pages/Home";
import ListingDetails from "./components/pages/ListingDetails";
import ListingForm from "./components/ListingForm";
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

  const handleToggleModal = (modalId, show) => {};

  return (
    <LoadingContext.Provider
      value={{
        isLoading: true,
        onStartedLoading: showLoading,
        onFinishedLoading: hideLoading,
      }}
    >
      {/* <!-- Preloader - style you can find in spinners.css --> */}
      <div id="preloader" style={isLoading ? {} : { display: "none" }}>
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="main-wrapper">
        <NavBar />
        <div className="clearfix"></div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listings/create" component={ListingForm} />
          <Route exact path="/listings/:id" component={ListingDetails} />
          <Route exact path="/listings/:id/edit" component={ListingForm} />
          <Route exact path="/listings" component={Listings} />
          <Redirect to="/404" />
        </Switch>

        <LogIn />
        <SignUp />

        <Link id="back2Top" className="top-scroll" title="Back to top" to="#">
          <i className="ti-arrow-up"></i>
        </Link>
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
