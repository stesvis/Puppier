import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import React from "react";

export default function HeadNavbar() {
  return (
    // <!-- Start Navigation -->
    <Router>
      <div className="header header-dark-transparent">
        <nav className="headnavbar">
          <div className="nav-header">
            <Link to="/" className="brand normal-logo">
              <img src="assets/img/g-logo-light.png" alt="" />
            </Link>
            <Link to="/" className="brand brand-overlay">
              <img src="assets/img/g-logo.png" alt="" />
            </Link>
            <button className="toggle-bar">
              <span className="ti-align-justify"></span>
            </button>
          </div>
          <ul className="menu">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>

            <li>
              <Link to="/explore">Explore</Link>
            </li>

            <li>
              <Link to="#" data-toggle="modal" data-target="#signup">
                Sign Up
              </Link>
            </li>
          </ul>

          <ul className="attributes">
            <li className="login-attri">
              <Link to="#" data-toggle="modal" data-target="#login">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
      </div>
    </Router>
    // <!-- End Navigation -->
  );
}
