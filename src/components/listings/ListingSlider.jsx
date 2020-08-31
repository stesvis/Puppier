import { Image, Modal } from "react-bootstrap";
import React, { Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function ListingSlider(props) {
  const { listing } = props;
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (index, e) => {
    setActiveCarouselIndex(index);
    console.log(index);
  };

  const handleImageClicked = (e) => {
    setImageIndex(activeCarouselIndex);
    setShowModal(true);
  };

  return (
    <Fragment>
      <Carousel
        activeIndex={activeCarouselIndex}
        onSelect={handleSelect}
        interval={3000}
        pauseOnHover={true}
      >
        {listing.images.map((image) => {
          return (
            <Carousel.Item key={image.id}>
              <Image
                id={imageIndex}
                className="d-block w-100 pointer"
                src={image}
                alt="Listing photos"
                onClick={handleImageClicked}
              />
              {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Fragment>
  );
}
