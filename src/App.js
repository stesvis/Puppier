import "./App.css";
import "react-image-lightbox/style.css";
import "react-toastify/dist/ReactToastify.css";

import { Link, Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import DashboardPage from "./components/pages/account/DashboardPage";
import HomePage from "./components/pages/home/HomePage";
import ListingDetailsPage from "./components/pages/listings/ListingDetailsPage";
import ListingFormPage from "./components/pages/account/ListingFormPage";
import ListingsPage from "./components/pages/listings/ListingsPage";
import LoadingContext from "./context/loadingContext";
import LogInModal from "./components/modals/LogInModal";
import LogInPage from "./components/pages/account/LogInPage";
import LogOut from "./components/pages/account/LogOut";
import ModalContext from "./context/modalContext";
import MyListingsPage from "./components/pages/account/MyListingsPage";
import NavBar from "./components/NavBar";
import NotFound from "./components/pages/NotFound";
import ProfileFormPage from "./components/pages/account/ProfileFormPage";
import ProfilePage from "./components/pages/account/ProfilePage";
import { Routes } from "./services/api/routes";
import SavedListingsPage from "./components/pages/account/SavedListingsPage";
import SearchContext from "./context/searchContext";
import { SearchParams } from "./models/SearchParams";
import SignUpModal from "./components/modals/SignUpModal";
import { ToastContainer } from "react-toastify";
import localStorageService from "./services/localStorageService";

// import { Modal, ModalBody } from "react-bootstrap";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState(new SearchParams());
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);
  const currentUser = localStorageService.getCurrentUser();

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
      }}>
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
          }>
          <NavBar currentUser={currentUser} />
          <div className="clearfix"></div>

          <SearchContext.Provider
            value={{
              searchParameters: searchParams,
              onSetSearchParams,
            }}>
            <Switch>
              <Route exact path={Routes.home} component={HomePage} />
              {/* Listings */}
              <Route exact path={Routes.listing_create}>
                {currentUser ? (
                  <ListingFormPage />
                ) : (
                  <Redirect
                    to={`${Routes.login}?return_url=${Routes.listing_create}`}
                  />
                )}
              </Route>
              {/* <Route
                exact
                path={Routes.listing_create}
                render={(props) => {
                  if (!currentUser) {
                    return <Redirect to={Routes.login} />;
                  }

                  return <ListingFormPage {...props} />;
                }}
              /> */}
              <Route
                exact
                path={Routes.listing_details}
                component={ListingDetailsPage}
              />
              <Route
                exact
                path={Routes.listing_edit}
                render={(props) => {
                  if (!currentUser) {
                    return <Redirect to={Routes.login} />;
                  }

                  return <ListingFormPage {...props} />;
                }}
              />
              <Route exact path={Routes.listings} component={ListingsPage} />
              {/* Profile */}
              <Route exact path={Routes.dashboard} component={DashboardPage} />
              <Route exact path={Routes.profile} component={ProfilePage} />
              <Route
                exact
                path={Routes.my_listings}
                component={MyListingsPage}
              />
              <Route
                exact
                path={Routes.saved_listings}
                component={SavedListingsPage}
              />
              <Route
                exact
                path={Routes.profile_edit}
                component={ProfileFormPage}
              />
              <Route exact path={Routes.login} component={LogInPage} />
              <Route exact path={Routes.signup} component={LogInPage} />
              <Route exact path={Routes.logout} component={LogOut} />
              <Route exact path={Routes.not_found} component={NotFound} />

              <Redirect to={Routes.not_found} />
            </Switch>
          </SearchContext.Provider>

          {/* <Modal show={showLogin}>
            <ModalBody> */}
          <LogInModal />
          {/* </ModalBody>
          </Modal> */}

          {/* <Modal show={showSignUp}>
            <ModalBody> */}
          <SignUpModal />
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
