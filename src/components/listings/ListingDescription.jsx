import React from "react";

export default function ListingDescription(props) {
  const { description } = props;

  return (
    // <!-- Single Block Wrap -->
    <div className="block-wrap">
      <div className="block-header">
        <h4 className="block-title">Description</h4>
      </div>

      <div className="block-body">
        <p>{description}</p>
      </div>
    </div>
  );
}
