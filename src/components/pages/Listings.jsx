import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { allListings, findListings } from "../../services/dataService";

import { Fragment } from "react";
import ListingCardDetailed from "./listings/ListingCardDetailed";
import ListingsSidebar from "./listings/ListingsSidebar";
import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";
import { useState } from "react";

export default function Listings(props) {
  const loadingContext = useContext(LoadingContext);

  const [listings, setListings] = useState({ data: [] });

  useEffect(() => {
    loadingContext.onStartedLoading();

    setTimeout(function () {
      const listings = allListings();
      setListings(listings);

      loadingContext.onFinishedLoading();
    }, process.env.REACT_APP_FAKE_API_DELAY); //wait 1 seconds
  }, []);

  return (
    <Fragment>
      <PageTitle title="Explore" subtitle="Find your new best friend" />
      <section className="gray">
        <Container>
          <Row>
            <Col lg={4} md={4} className="order-2 order-lg-1 order-md-1">
              <ListingsSidebar />
            </Col>
            <Col
              lg={8}
              md={8}
              className="order-1 content-area order-md-2 order-lg-2"
            >
              <Row>
                {listings.data.map((listing) => (
                  <Col lg={6} md={12} sm={12} key={listing.id}>
                    <ListingCardDetailed listing={listing} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
