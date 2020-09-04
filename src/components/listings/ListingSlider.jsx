import React, { Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import { useState } from "react";

export default function ListingSlider(props) {
  const { listing } = props;
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleSelect = (index, e) => {
    setActiveCarouselIndex(index);
    console.log(index);
  };

  const handleImageClicked = (e) => {
    setImageIndex(activeCarouselIndex);
    setIsLightboxOpen(true);
  };

  return (
    <Fragment>
      <div className="property3-slide single-advance-property mb-4">
        <Carousel
          activeIndex={activeCarouselIndex}
          onSelect={handleSelect}
          interval={3000}
          pauseOnHover={true}
        >
          {listing.images.map((image) => (
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
          ))}
        </Carousel>

        {isLightboxOpen && (
          <Lightbox
            mainSrc={listing.images[imageIndex]}
            nextSrc={listing.images[(imageIndex + 1) % listing.images.length]}
            prevSrc={
              listing.images[
                (imageIndex + listing.images.length - 1) % listing.images.length
              ]
            }
            onCloseRequest={() => setIsLightboxOpen(false)}
            onMovePrevRequest={() =>
              setImageIndex(
                (imageIndex + listing.images.length - 1) % listing.images.length
              )
            }
            onMoveNextRequest={() =>
              setImageIndex((imageIndex + 1) % listing.images.length)
            }
          />
        )}
      </div>
    </Fragment>
  );
}
