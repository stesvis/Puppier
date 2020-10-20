import { Col, Container, Row } from "react-bootstrap";

import React from "react";

export default function PageTitle(props) {
  return (
    <div
      className="image-cover page-title"
      style={{
        background: "url(https://via.placeholder.com/1920x1000) no-repeat",
      }}
      data-overlay="6">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h2 className="ipt-title">{props.title}</h2>
            <span className="ipn-subtitle text-light">{props.subtitle}</span>
            {/* <h4 className="modal-header-title">
              Add/Edit <span className="theme-cl">Listing</span>
            </h4> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
