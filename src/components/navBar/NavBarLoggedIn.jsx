import { Link } from "react-router-dom";
import React from "react";
import { Routes } from "../../services/api/routes";

export default function NavBarLoggedIn(props) {
  return (
    <ul className="attributes">
      <li className="login-attri">
        <div className="btn-group account-drop">
          <button
            type="button"
            className="btn btn-order-by-filt"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img
              src="https://via.placeholder.com/400x400"
              className="avater-img"
              alt=""
            />
            Hi, {props.currentUser.name}
          </button>
          <div className="dropdown-menu pull-right animated flipInX">
            <Link to={Routes.dashboard}>
              <i className="ti-dashboard"></i>Dashboard
            </Link>
            <Link to={Routes.profile}>
              <i className="ti-user"></i>My Profile
            </Link>
            <Link to={Routes.listing_create}>
              <i className="ti-plus"></i>Add Listing
            </Link>
            <Link to={Routes.my_listings}>
              <i className="ti-layers"></i>My Listings
            </Link>
            {/* <Link to="wallet.html">
              <i className="ti-pencil-alt"></i>Wallet
            </Link> */}
            <Link to={Routes.saved_listings}>
              <i className="ti-bookmark"></i>Bookmarked Listings
            </Link>
            <Link to={Routes.profile_edit}>
              <i className="ti-unlock"></i>Change Password
            </Link>
            <Link to={Routes.logout}>
              <i className="ti-unlock"></i>Log Out
            </Link>
          </div>
        </div>
      </li>
      <li className="submit-attri theme-log">
        <Link to="/listings/create">Add Listing</Link>
      </li>
    </ul>
  );
}
