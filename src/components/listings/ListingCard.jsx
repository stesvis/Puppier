import { Link } from "react-router-dom";
import React from "react";

export default function ListingCard(props) {
  const { listing } = props;

  return (
    // <!-- Single List -->
    <div className="list-slide-box">
      <div className="modern-list ml-2">
        <div className="grid-category-thumb">
          <Link
            to={{
              pathname: `/listings/${listing.id}`,
              state: {
                listing: listing,
              },
            }}
            className="overlay-cate"
          >
            <img src={listing.images[0]} className="img-responsive" alt="" />
          </Link>
          <div className="listing-price-info">
            <span className="pricetag">{listing.price}</span>
          </div>
          <div className="property_meta">
            <div className="list-rates">
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star filled"></i>
              <i className="ti-star"></i>
              <Link to="#" className="tl-review">
                ({listing.reviewsCount} Reviews)
              </Link>
            </div>
            <h4 className="lst-title">
              <Link
                to={{
                  pathname: `/listings/${listing.id}`,
                  state: {
                    listing: listing,
                  },
                }}
              >
                {listing.title}
              </Link>
              <span className="veryfied-author"></span>
            </h4>
            <span className="font-10 font-italic bg-info-light">
              {listing.location}
            </span>
          </div>
        </div>
        <div className="modern-list-content">
          <div className="listing-cat">
            <Link to="#" className="cat-icon cl-1">
              <i
                className={
                  listing.category.name.toLowerCase() === "dog"
                    ? "fas fa-dog"
                    : "fas fa-cat"
                }
              ></i>
              {listing.category.name}
            </Link>
            <span className="more-cat">+3</span>
          </div>
          <div className="author-avatar">
            <img
              src={listing.author.avatarImage}
              className="author-avatar-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
