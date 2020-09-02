import { Col } from "react-bootstrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function ListingSideBar(props) {
  const { listing } = props;

  return (
    <Fragment>
      <div className="verified-list mb-4">
        <i className="ti-check"></i>Verified Listing
      </div>

      <div className="page-sidebar">
        {/* <!-- Agent Detail --> */}
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
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Send Message to author..."
            ></textarea>
          </div>
          <button className="btn btn-theme full-width">Send Message</button>
        </div>

        {/* <!-- Business Info --> */}
        <div className="tr-single-box">
          <div className="tr-single-header">
            <h4>
              <i className="ti-direction"></i> Listing Info
            </h4>
          </div>

          <div className="tr-single-body">
            <ul className="extra-service">
              <li>
                <div className="icon-box-icon-block">
                  <Link to="#">
                    <div className="icon-box-round">
                      <i className="lni-map-marker"></i>
                    </div>
                    <div className="icon-box-text">{listing.location}</div>
                  </Link>
                </div>
              </li>

              <li>
                <div className="icon-box-icon-block">
                  <Link to="#">
                    <div className="icon-box-round">
                      <i className="lni-phone-handset"></i>
                    </div>
                    <div className="icon-box-text">{listing.author.phone}</div>
                  </Link>
                </div>
              </li>

              <li>
                <div className="icon-box-icon-block">
                  <Link to="#">
                    <div className="icon-box-round">
                      <i className="lni-envelope"></i>
                    </div>
                    <div className="icon-box-text">{listing.author.email}</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Tags --> */}
        <div className="tr-single-box">
          <div className="tr-single-header">
            <h4>
              <i className="lni-tag"></i> Tags
            </h4>
          </div>

          <div className="tr-single-body">
            <ul className="extra-service half">
              <li>
                <div className="icon-box-icon-block">
                  <Link to="#">
                    <div className="icon-box-round">
                      <i className="lni-car-alt"></i>
                    </div>
                    <div className="icon-box-text">{listing.category.name}</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
