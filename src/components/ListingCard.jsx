import { Link } from "react-router-dom";
import React from "react";

export default function ListingCard() {
  return (
    // <!-- Single List -->
    <div className="list-slide-box">
      <div className="modern-list ml-2">
        <div className="grid-category-thumb">
          <a href="search-listing.html" className="overlay-cate">
            <img
              src="https://via.placeholder.com/1200x850"
              className="img-responsive"
              alt=""
            />
          </a>
          <div className="listing-price-info">
            <span className="pricetag">$25 - $65</span>
          </div>
          <div className="property_meta">
            <div className="list-rates">
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star"></i>
              <Link to="#" className="tl-review">
                (24 Reviews)
              </Link>
            </div>
            <h4 className="lst-title">
              <Link to="listing-detail.html">Castle Palace</Link>
              <span className="veryfied-author"></span>
            </h4>
          </div>
        </div>
        <div className="modern-list-content">
          <div className="listing-cat">
            <Link to="search-listing.html" className="cat-icon cl-1">
              <i className="ti-briefcase bg-a"></i>Services
            </Link>
            <span className="more-cat">+3</span>
          </div>
          <div className="author-avater">
            <img
              src="https://via.placeholder.com/400x400"
              className="author-avater-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
