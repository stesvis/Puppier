import { Link } from "react-router-dom";
import React from "react";

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
            aria-expanded="false"
          >
            <img
              src="https://via.placeholder.com/400x400"
              className="avater-img"
              alt=""
            />
            Hi, Admin
          </button>
          <div className="dropdown-menu pull-right animated flipInX">
            <a href="dashboard.html">
              <i className="ti-dashboard"></i>Dashboard
            </a>
            <a href="add-listing.html">
              <i className="ti-plus"></i>Add Listing
            </a>
            <a href="my-profile.html">
              <i className="ti-user"></i>My Profile
            </a>
            <a href="my-listings.html">
              <i className="ti-layers"></i>My Listing
            </a>
            <a href="wallet.html">
              <i className="ti-pencil-alt"></i>Wallet
            </a>
            <a href="bookmark-list.html">
              <i className="ti-bookmark"></i>Bookmarked Listings
            </a>
            <a className="active" href="login.html">
              <i className="ti-unlock"></i>Change Password
            </a>
          </div>
        </div>
      </li>
      <li className="submit-attri theme-log">
        <Link to="/listings/create">Add Listing</Link>
      </li>
    </ul>
  );
}
