import { Col, Container, Row } from "react-bootstrap";

import React from "react";

export default function SavedListings(props) {
  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <h4 className="modal-header-title">
              Saved <span className="theme-cl">Listings</span>
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
