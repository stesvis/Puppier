import React, { useEffect } from "react";

import { Link } from "react-router-dom";

export default function ListingSlider(props) {
  const { listing } = props;

  return (
    <div className="property3-slide single-advance-property mb-4">
      <div className="slider-for">
        {listing.images.map((image, index) => {
          return (
            <Link to="#" key={index} className="item-slick">
              <img src={image} alt="Alt" />
            </Link>
          );
        })}
      </div>

      <div className="slider-nav">
        <div className="item-slick">
          {listing.images.map((image, index) => {
            return <img key={index} src={image} alt="Alt" />;
          })}
        </div>
      </div>
    </div>
  );
}
