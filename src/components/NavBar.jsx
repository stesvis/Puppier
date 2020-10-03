import { Link, NavLink, useLocation } from "react-router-dom";

import React from "react";

// import ModalContext from "../context/modalContext";

export default function NavBar() {
  // const modalContext = useContext(ModalContext);
  const location = useLocation();

  let navbarClass =
    location.pathname === "/"
      ? "header header-dark-transparent nav-left-side"
      : "header header-light nav-left-side";

  const logoElement =
    location.pathname === "/" ? (
      <>
        <Link to="/" className="brand normal-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/y-logo-light.png`}
            alt=""
          />
        </Link>
        <Link to="/" className="brand brand-overlay">
          <img src={`${process.env.PUBLIC_URL}/assets/img/y-logo.png`} alt="" />
        </Link>
      </>
    ) : (
      <Link to="/" className="brand">
        <img src={`${process.env.PUBLIC_URL}/assets/img/y-logo.png`} alt="" />
      </Link>
    );

  return (
    // <!-- Start Navigation -->
    <div className={navbarClass}>
      <nav className="headnavbar">
        <div className="nav-header">
          {logoElement}
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
        </ul>
        <ul className="attributes attributes-desk">
          <li className="log-icon log-seprate">
            <Link
              to="#"
              data-toggle="modal"
              data-target="#login"
              // onClick={(e) => modalContext.onModalToggled(e, "login", true)}
            >
              Log In
            </Link>
          </li>
          <li className="log-icon">
            <Link
              to="#"
              data-toggle="modal"
              data-target="#signup"
              // onClick={(e) => modalContext.onModalToggled(e, "signup", true)}
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
    // <!-- End Navigation -->
  );
}
