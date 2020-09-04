import { Link } from "react-router-dom";
import React from "react";

export default function ListingContactBox(props) {
  const { listing } = props;

  return (
    <div className="agent-widget">
      <div className="agent-title">
        <div className="agent-photo">
          <img src={listing.author.avatarImage} alt="" />
        </div>
        <div className="agent-details">
          <h4>
            <Link to="author-detail.html">{listing.author.name}</Link>
          </h4>
          <span>
            <i className="ti-view-grid"></i>202 Listings
          </span>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Send Message to author..."
        ></textarea>
      </div>
      <button className="btn btn-theme full-width">Send Message</button>
    </div>
  );
}
