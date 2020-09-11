import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { Listing } from "../../models/Listing";
import ListingMainDetails from "./listings/ListingMainDetails";
import ListingSideBar from "./listings/ListingSideBar";
import LoadingContext from "../../context/loadingContext";
import { getListing } from "../../services/dataService";

export default function ListingDetails(props) {
  const loadingContext = useContext(LoadingContext);

  const { id } = props.match.params;
  // const { listing } = props.location.state;
  const [listing, setListing] = useState(new Listing());

  useEffect(() => {
    loadingContext.onStartedLoading();
    // Fetch single listing by id
    setTimeout(function () {
      const listing = getListing(parseInt(id));
      setListing(listing);
      loadingContext.onFinishedLoading();
    }, process.env.REACT_APP_FAKE_API_DELAY); //wait 1 seconds
  }, [id]);

  // useEffect(() => {
  //   console.log("loadingContext changed");
  // }, [loadingContext]);

  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <ListingMainDetails listing={listing} />
          </Col>
          <Col lg={4} md={12} sm={12}>
            <ListingSideBar listing={listing} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
