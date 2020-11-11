import { Link } from "react-router-dom";
import React from "react";

export default function ListingCardDetailed(props) {
  const { listing } = props;

  return (
    <div className="property_item classical-list">
      <div className="image">
        <Link to={`/listings/${listing.id}`} className="listing-thumb">
          <img
            src={listing.photos[0].public_url}
            alt="latest property"
            className="img-responsive"
          />
        </Link>
        <div className="listing-price-info">
          <span className="pricetag">{listing.price}</span>
        </div>
        <Link to="#" className="tag_t">
          <i className="ti-heart"></i>Save
        </Link>
        <span className="list-rate great">{listing.views_count}</span>
      </div>

      <div className="proerty_content">
        <div className="author-avatar">
          <img
            src={listing.user.profile_photo_path}
            className="author-avatar-img"
            alt=""
          />
        </div>
        <div className="proerty_text">
          <h3 className="captlize">
            <Link to={`/listings/${listing.id}`}>
              {listing.title.length > 25
                ? `${listing.title.slice(0, 25)} ...`
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
              <span className="inc-fleat inc-add">
                {`${listing.address.geolocation.city.short_name}, ${listing.address.geolocation.region.short_name}`}
              </span>
            </div>
            <div className="listing-card-info-icon">
              <span className="inc-fleat inc-call">{listing.user.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="listing-footer-info">
        <div className="listing-cat">
          <Link to="#" className="cat-icon cl-1">
            <i
              className={
                listing.category.name.toLowerCase() === "dog"
                  ? "fas fa-dog"
                  : "fas fa-cat"
              }></i>
            {listing.category.name}
          </Link>
          <span className="more-cat">+{listing.user.listings_count}</span>
        </div>
        <span className="place-status">Available</span>
      </div>
    </div>
  );
}
