import { Fragment } from "react";
import ListingDescription from "./ListingDescription";
import ListingOverviewBar from "./ListingOverviewBar";
import ListingSlider from "./ListingSlider";
import React from "react";

export default function ListingMainDetails(props) {
  const { listing } = props;

  return (
    <Fragment>
      <div className="slide-property-first mb-4">
        <div className="listname-into">
          <h2>
            {listing.title}{" "}
            <span className="prt-type rent">{listing.category.name}</span>
          </h2>
          <span>
            <i className="lni-map-marker"></i> {listing.address}
          </span>
        </div>
      </div>
      <ListingOverviewBar listing={listing} />
      <ListingSlider listing={listing} />
      <ListingDescription description={listing.description} />
    </Fragment>
  );
}
