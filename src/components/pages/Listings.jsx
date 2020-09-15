import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { allListings, findListings } from "../../services/dataService";

import { Fragment } from "react";
import ListingCardDetailed from "./listings/ListingCardDetailed";
import ListingsSidebar from "./listings/ListingsSidebar";
import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";
import queryString from "query-string";
import { useState } from "react";

export default function Listings(props) {
  // static contextType = LoadingContext;
  const loadingContext = useContext(LoadingContext);
  const [listings, setListings] = useState({ data: [] });
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    loadingContext.onStartedLoading();

    setTimeout(function () {
      const queryParams = queryString.parse(props.location.search);

      if (queryParams) {
        setKeywords(queryParams.keywords);
        setLocation(queryParams.location);
        setCategoryId(queryParams.categoryId);

        const searchResults = findListings(
          queryParams.keywords,
          queryParams.location,
          parseInt(queryParams.categoryId)
        );
        setListings({ data: searchResults });
      } else {
        const listings = allListings();
        setListings(listings);
      }

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
              <ListingsSidebar
                keywords={keywords}
                location={location}
                categoryId={categoryId}
              />
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
