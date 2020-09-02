import { Link } from "react-router-dom";
import React from "react";

export default function ListingCardDetailed(props) {
  const { listing } = props;

  return (
    <div className="property_item classical-list">
      <div className="image">
        <Link to={`/listings/${listing.id}`} className="listing-thumb">
          <img
            src={listing.images[0]}
            alt="latest property"
            className="img-responsive"
          />
        </Link>
        <div className="listing-price-info">
          <span className="pricetag">$20 - $55</span>
        </div>
        <Link to="#" className="tag_t">
          <i className="ti-heart"></i>Save
        </Link>
        <span className="list-rate great">5</span>
      </div>

      <div className="proerty_content">
        <div className="author-avatar">
          <img
            src={listing.author.avatarImage}
            className="author-avatar-img"
            alt=""
          />
        </div>
        <div className="proerty_text">
          <h3 className="captlize">
            <Link to="listing-detail.html">
              {listing.title.length > 27
                ? `${listing.title.slice(0, 27)} ...`
                : listing.title}
            </Link>
            <span className="veryfied-author"></span>
          </h3>
        </div>
        <p className="property_add">
          {listing.description.length > 27
            ? `${listing.description.slice(0, 27)} ...`
            : listing.description}
        </p>
        <div className="property_meta">
          <div className="list-fx-features">
            <div className="listing-card-info-icon">
              <span className="inc-fleat inc-add">{listing.location}</span>
            </div>
            <div className="listing-card-info-icon">
              <span className="inc-fleat inc-call">{listing.author.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="listing-footer-info">
        <div className="listing-cat">
          <Link to="search-listing.html" className="cat-icon cl-1">
            <i className="ti-shopping-cart-full bg-b"></i>
            {listing.category.name}
          </Link>
          <span className="more-cat">+2</span>
        </div>
        <span className="place-status">Available</span>
      </div>
    </div>
  );
}
