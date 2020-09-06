import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useContext } from "react";

import ModalContext from "../context/modalContext";

export default function NavBar() {
  const modalContext = useContext(ModalContext);
  const location = useLocation();

  let navbarClass = "header header-light nav-left-side"; // header-fixed
  const logoClass = location.pathname === "/" ? "brand normal-logo" : "brand";
  let logoImageSrc = `${process.env.PUBLIC_URL}/assets/img/y-logo.png`;

  // console.log(location);
  if (location.pathname === "/") {
    // home page
    navbarClass = "header header-dark-transparent nav-left-side"; // header-fixed
    logoImageSrc = `${process.env.PUBLIC_URL}/assets/img/y-logo-light.png`;
  }

  return (
    // <!-- Start Navigation -->
    <React.Fragment>
      <div className={navbarClass}>
        <nav className="headnavbar">
          <div className="nav-header">
            <Link to="/" className={logoClass}>
              <img src={logoImageSrc} alt="" />
            </Link>
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
              <Link
                to="#"
                data-toggle="modal"
                data-target="#login"
                aria-controls="login"
                onClick={(e) => modalContext.onModalToggled(e, "login", true)}
              >
                Log In
              </Link>
            </li>
            <li className="log-icon">
              <Link
                to="#"
                data-toggle="modal"
                data-target="#signup"
                aria-controls="signup"
                onClick={(e) => modalContext.onModalToggled(e, "signup", true)}
              >
                Sign Up
              </Link>
            </li>
            <li className="submit-attri theme-log">
              <Link to="/listings/create">Add Listing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
    // <!-- End Navigation -->
  );
}
