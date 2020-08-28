import { Link, NavLink, useLocation } from "react-router-dom";

import React from "react";

export default function NavBar() {
  let navbarClass = "header nav-left-side";
  let logoImageSrc = "../assets/img/g-logo.png";

  const location = useLocation();
  // console.log(location);
  if (location.pathname === "/") {
    navbarClass = "header header-dark-transparent nav-left-side";
    logoImageSrc = "assets/img/g-logo-light.png";
  }

  return (
    // <!-- Start Navigation -->
    <React.Fragment>
      <div className={navbarClass}>
        <nav className="headnavbar">
          <div className="nav-header">
            <Link to="/" className="brand normal-logo">
              <img src={logoImageSrc} alt="" />
            </Link>
            {/* <Link to="/" className="brand brand-overlay">
              <img src="assets/img/g-logo.png" alt="" />
            </Link> */}
            <button className="toggle-bar">
              <span className="ti-align-justify"></span>
            </button>
          </div>

          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/listings">
                Explore
              </NavLink>
            </li>

            {/* <li>
              <Link to="#" data-toggle="modal" data-target="#signup">
                Sign Up
              </Link>
            </li> */}
          </ul>

          <ul className="attributes attributes-desk">
            <li className="log-icon log-seprate">
              <Link to="#" data-toggle="modal" data-target="#login">
                Log In
              </Link>
            </li>
            <li className="log-icon">
              <Link to="#" data-toggle="modal" data-target="#signup">
                Sign Up
              </Link>
            </li>
            <li className="submit-attri theme-log">
              <Link to="/listings/add">Add Listing</Link>
            </li>
          </ul>

          {/* <ul className="attributes">
            <li className="login-attri">
              <Link to="#" data-toggle="modal" data-target="#login">
                Log In
              </Link>
            </li>
          </ul> */}
        </nav>
      </div>
      <div className="clearfix"></div>
    </React.Fragment>
    // <!-- End Navigation -->
  );
}
