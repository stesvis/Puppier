import "react-multi-carousel/lib/styles.css";

import * as listingsApiService from "../../../services/api/listingsApiService";

import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import ListingCard from "./ListingCard";
import { useEffect } from "react";

export default function FeaturedListings(props) {
  const [listings, setListings] = useState({ data: [] });

  useEffect(() => {
    // Fetch single listing by id
    async function getFeaturedListings() {
      const featuredListings = await listingsApiService.getFeaturedListings();
      setListings(featuredListings.data);
      console.log(featuredListings.data);
      return featuredListings.data;
    }

    getFeaturedListings();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <div className="sec-heading center">
              <h2>Most Popular Listings</h2>
              <p>Find new & featured listings for you.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              showDots
              autoPlay
              infinite
              autoPlaySpeed={3000}
            >
              {listings.data.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
