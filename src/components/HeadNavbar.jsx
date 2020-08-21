import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function HeadNavbar() {
  const [navbarClass, setNavbarClass] = useState("header");
  const [logoImageSrc, setLogoImageSrc] = useState(
    "assets/img/g-logo-light.png"
  );

  return (
    // <!-- Start Navigation -->
    <div className={navbarClass}>
      <nav className="headnavbar">
        <div className="nav-header">
          <Link to="/" className="brand normal-logo">
            <img src={logoImageSrc} alt="" />
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
            <NavLink
              exact
              to="/"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }

                setNavbarClass("header header-dark-transparent");
                setLogoImageSrc("assets/img/g-logo-light.png");
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/explore"
              activeClassName="active"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }

                setNavbarClass("header");
                setLogoImageSrc("assets/img/g-logo.png");
              }}
            >
              Explore
            </NavLink>
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
    </div>
  );
}
