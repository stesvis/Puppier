import ListingBanner from "../ListingBanner";
import React from "react";

export default function ListingDetails(props) {
  console.log("params", props);
  console.log("listing", props.location);
  const { listing } = props.location.state;

  return <ListingBanner listing={listing} />;
}
