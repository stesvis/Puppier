import IconBox from "../IconBox";
import { Link } from "react-router-dom";
import React from "react";

export default function ListingInfoBox(props) {
  const { listing } = props;

  return (
    <div className="tr-single-box">
      <div className="tr-single-header">
        <h4>
          <i className="ti-direction"></i> Listing Info
        </h4>
      </div>
      <div className="tr-single-body">
        <ul className="extra-service">
          <li>
            <IconBox icon="lni-map-marker" text={listing.location} />
          </li>
          <li>
            <IconBox icon="lni-phone-handset" text={listing.author.phone} />
          </li>
          <li>
            <IconBox icon="lni-envelope" text={listing.author.email} />
          </li>
        </ul>
      </div>
    </div>
  );
}
