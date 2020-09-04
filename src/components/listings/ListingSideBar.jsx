import { Col } from "react-bootstrap";
import { Fragment } from "react";
import IconBox from "../IconBox";
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
        <ListingInfoBox
          listing={listing}
          title="Listing Info"
          icon="ti-direction"
        >
          <IconBox icon="lni-map-marker" text={listing.location} />
          <IconBox icon="lni-phone-handset" text={listing.author.phone} />
          <IconBox icon="lni-envelope" text={listing.author.email} />
        </ListingInfoBox>
        {/* Listing Stats */}
        <ListingInfoBox listing={listing} title="Stats" icon="ti-bar-chart">
          <IconBox icon="ti-eye" text={listing.viewsCount + " views"} />
          <IconBox
            icon="ti-comment-alt"
            text={listing.comments.length + " comments"}
          />
        </ListingInfoBox>
        {/* Tags */}
        <TagsBox tags={listing.tags} />
      </div>
    </Fragment>
  );
}
