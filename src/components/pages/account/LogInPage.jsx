import { Col, Container, Row } from "react-bootstrap";

import LogInForm from "./LogInForm";
import React from "react";
import queryString from "query-string";

export default function LogInPage(props) {
  const queryParams = queryString.parse(props.location.search);

  const returnUrl =
    queryParams && queryParams.return_url ? queryParams.return_url : "";

  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <h4 className="modal-header-title">
              Log <span className="theme-cl">In</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <LogInForm returnUrl={returnUrl} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
