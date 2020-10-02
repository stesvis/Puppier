import { Col, Row } from "react-bootstrap";

import ListingCardDetailed from "./ListingCardDetailed";
import React from "react";

export default function ListingsGrid(props) {
  const { listings } = props;

  return (
    <Row>
      {listings.map((listing) => (
        <Col lg={6} md={12} sm={12} key={listing.id}>
          <ListingCardDetailed listing={listing} />
        </Col>
      ))}
    </Row>
  );
}
