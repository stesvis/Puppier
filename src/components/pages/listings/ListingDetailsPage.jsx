import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { Listing } from "../../../models/Listing";
import ListingMainDetails from "./ListingMainDetails";
import ListingSideBar from "./ListingSideBar";
import LoadingContext from "../../../context/loadingContext";
import listingsApiService from "../../../services/api/listingsApiService";

export default function ListingDetails(props) {
  const loadingContext = useContext(LoadingContext);

  const { id } = props.match.params;
  // const { listing } = props.location.state;
  const [listing, setListing] = useState(new Listing());

  useEffect(() => {
    loadingContext.onStartedLoading();

    // Fetch single listing by id
    async function getListing(id) {
      const response = await listingsApiService.get(id);
      setListing(response.data.data);
    }

    getListing(id);

    loadingContext.onFinishedLoading();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

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
