import { Link } from "react-router-dom";
import React from "react";

export default function NavBarLoggedOut(props) {
  return (
    <ul className="attributes attributes-desk">
      <li className="log-icon log-separator">
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
  );
}
