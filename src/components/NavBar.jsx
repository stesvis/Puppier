import { Link, NavLink, useLocation } from "react-router-dom";

import React from "react";

export default function NavBar() {
  let navbarClass = "header header-light nav-left-side"; // header-fixed
  let logoImageSrc = `${process.env.PUBLIC_URL}/assets/img/g-logo.png`;

  const location = useLocation();
  // console.log(location);
  if (location.pathname === "/") {
    // home page
    navbarClass = "header header-dark-transparent nav-left-side"; // header-fixed
    logoImageSrc = `${process.env.PUBLIC_URL}/assets/img/g-logo-light.png`;
  }

  return (
    // <!-- Start Navigation -->
    <React.Fragment>
      <div className={navbarClass}>
        <nav className="headnavbar core-nav">
          <div className="nav-container">
            <div className="nav-header right">
              <Link to="/" className="brand">
                <img src={logoImageSrc} alt="" />
              </Link>
              <button className="toggle-bar core-nav-toggle">
                <span className="ti-align-justify"></span>
              </button>
            </div>

            <div className="wrap-core-nav-list right">
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

              <ul className="menu core-nav-list">
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
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
    // <!-- End Navigation -->
  );
}
