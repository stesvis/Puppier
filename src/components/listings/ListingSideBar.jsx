import { Col } from "react-bootstrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ListingContactBox from "./ListingContactBox";
import ListingInfoBox from "./ListingInfoBox";
import React from "react";
import TagsBox from "./TagsBox";

export default function ListingSideBar(props) {
  const { listing } = props;

  return (
    <Fragment>
      <div className="verified-list mb-4">
        <i className="ti-check"></i>Verified Listing
      </div>

      <div className="page-sidebar">
        {/* Lister Details */}
        <ListingContactBox listing={listing} />
        {/* Listing Info */}
        <ListingInfoBox listing={listing} />
        {/* Tags */}
        <TagsBox tags={listing.tags} />
      </div>
    </Fragment>
  );
}
