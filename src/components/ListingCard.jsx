import { Link } from "react-router-dom";
import React from "react";

export default function ListingCard(props) {
  return (
    // <!-- Single List -->
    <div className="list-slide-box">
      <div className="modern-list ml-2">
        <div className="grid-category-thumb">
          <a href="search-listing.html" className="overlay-cate">
            <img src={props.listing.image} className="img-responsive" alt="" />
          </a>
          <div className="listing-price-info">
            <span className="pricetag">{props.listing.price}</span>
          </div>
          <div className="property_meta">
            <div className="list-rates">
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star"></i>
              <Link to="#" className="tl-review">
                ({props.listing.reviewsCount} Reviews)
              </Link>
            </div>
            <h4 className="lst-title">
              <Link to="listing-detail.html">{props.listing.title}</Link>
              <span className="veryfied-author"></span>
            </h4>
          </div>
        </div>
        <div className="modern-list-content">
          <div className="listing-cat">
            <Link to="search-listing.html" className="cat-icon cl-1">
              <i className="ti-briefcase bg-a"></i>
              {props.listing.category.name}
            </Link>
            <span className="more-cat">+3</span>
          </div>
          <div className="author-avatar">
            <img
              src={props.listing.author.avatarImage}
              className="author-avatar-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
