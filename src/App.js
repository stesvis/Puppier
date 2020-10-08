import "./App.css";
import "react-image-lightbox/style.css";
import "react-toastify/dist/ReactToastify.css";

import { Link, Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/pages/Home";
import ListingDetails from "./components/pages/ListingDetails";
import ListingForm from "./components/pages/listings/ListingForm";
import Listings from "./components/pages/Listings";
import LoadingContext from "./context/loadingContext";
import LogInForm from "./components/modals/LogInForm";
import ModalContext from "./context/modalContext";
import NavBar from "./components/NavBar";
import SearchContext from "./context/searchContext";
import { SearchParams } from "./models/SearchParams";
import SignUpForm from "./components/modals/SignUpForm";
import { ToastContainer } from "react-toastify";

// import { Modal, ModalBody } from "react-bootstrap";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState(new SearchParams());
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);

  //#region context
  const showLoading = () => {
    // console.log("started loading");
    setIsLoading(true);
  };

  const hideLoading = () => {
    // console.log("finished loading");
    setIsLoading(false);
  };

  const onSetSearchParams = (value) => {
    // console.log(value);
    setSearchParams(value);
  };
  //#endregion

  // const handleToggleModal = (e, modalId, show) => {
  //   e && e.preventDefault();
  //   console.log("handleToggleModal");

  //   switch (modalId) {
  //     case "login":
  //       setShowLogin(show);
  //       break;
  //     case "signup":
  //       setShowSignUp(show);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <LoadingContext.Provider
      value={{
        isLoading: true,
        onStartedLoading: showLoading,
        onFinishedLoading: hideLoading,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <!-- Preloader - style you can find in spinners.css --> */}
      <div id="preloader" style={isLoading ? {} : { display: "none" }}>
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="main-wrapper">
        <ModalContext.Provider
          value={
            {
              // onModalToggled: handleToggleModal,
            }
          }
        >
          <NavBar currentUser={localStorage.getItem("currentUser")} />
          <div className="clearfix"></div>

          <SearchContext.Provider
            value={{
              searchParameters: searchParams,
              onSetSearchParams,
            }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/listings/create" component={ListingForm} />
              <Route exact path="/listings/:id" component={ListingDetails} />
              <Route exact path="/listings/:id/edit" component={ListingForm} />
              <Route exact path="/listings" component={Listings} />
              <Redirect to="/404" />
            </Switch>
          </SearchContext.Provider>

          {/* <Modal show={showLogin}>
            <ModalBody> */}
          <LogInForm />
          {/* </ModalBody>
          </Modal> */}

          {/* <Modal show={showSignUp}>
            <ModalBody> */}
          <SignUpForm />
          {/* </ModalBody>
          </Modal> */}
          <Link id="back2Top" className="top-scroll" title="Back to top" to="#">
            <i className="ti-arrow-up"></i>
          </Link>
        </ModalContext.Provider>
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
