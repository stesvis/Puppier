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
          {listing.photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <Image
                id={imageIndex}
                className="d-block w-100 pointer"
                src={photo.public_url}
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
            mainSrc={listing.photos[imageIndex].public_url}
            nextSrc={listing.photos[(imageIndex + 1) % listing.photos.length]}
            prevSrc={
              listing.photos[
                (imageIndex + listing.photos.length - 1) % listing.photos.length
              ]
            }
            onCloseRequest={() => setIsLightboxOpen(false)}
            onMovePrevRequest={() =>
              setImageIndex(
                (imageIndex + listing.photos.length - 1) % listing.photos.length
              )
            }
            onMoveNextRequest={() =>
              setImageIndex((imageIndex + 1) % listing.photos.length)
            }
          />
        )}
      </div>
    </Fragment>
  );
}
