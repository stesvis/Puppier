import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

export default function ListingSlider(props) {
  const { listing } = props;

  return (
    <div className="property3-slide single-advance-property mb-4">
      <div className="slider-for">
        {listing.images.map((image, index) => {
          return (
            <a href={image} key={index} className="item-slick">
              <img src={image} alt="Alt" />
            </a>
          );
        })}
      </div>

      <div className="slider-nav">
        {listing.images.map((image, index) => {
          return (
            <div key={index} className="item-slick">
              <img src={image} alt="Alt" />
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   <div class="container-fluid">
    //     <OwlCarousel
    //       items={listing.images.length}
    //       className="owl-theme"
    //       loop
    //       autoplay
    //       nav
    //       margin={5}
    //     >
    //       {listing.images.map((image, index) => {
    //         return (
    //             <img className="img" key={index} src={image} alt="Alt" />
    //         );
    //       })}
    //     </OwlCarousel>
    //   </div>
    // </div>
  );
}
