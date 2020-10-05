import { NavLink, useLocation } from "react-router-dom";

import Logo from "./navBar/Logo";
import NavBarLoggedIn from "./navBar/NavBarLoggedIn";
import NavBarLoggedOut from "./navBar/NavBarLoggedOut";
import React from "react";

// import ModalContext from "../context/modalContext";

export default function NavBar(props) {
  // const modalContext = useContext(ModalContext);
  const location = useLocation();

  let navbarClass =
    location.pathname === "/"
      ? "header header-dark-transparent nav-left-side"
      : "header header-light nav-left-side";

  return (
    // <!-- Start Navigation -->
    <div className={navbarClass}>
      <nav className="headnavbar">
        <div className="nav-header">
          <Logo />
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
        {!props.currentUser && <NavBarLoggedOut />}
        {props.currentUser && <NavBarLoggedIn />}
      </nav>
    </div>
    // <!-- End Navigation -->
  );
}
