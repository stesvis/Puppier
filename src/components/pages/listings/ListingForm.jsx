import { Col, Container, Row } from "react-bootstrap";

import React from "react";

export default function ListingForm(props) {
  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <h2>Add/Edit Listing</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
