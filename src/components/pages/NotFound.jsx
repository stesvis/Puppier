import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import { Routes } from "../../services/api/routes";

export default function NotFound(props) {
  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <h4 className="modal-header-title">
              Not <span className="theme-cl">Found</span>
            </h4>
          </Col>
        </Row>
        <section className="error-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/404.png`}
                    className="img-fluid"
                    alt=""
                  />
                  <p>
                    Maecenas quis consequat libero, a feugiat eros. Nunc ut
                    lacinia tortor morbi ultricies laoreet ullamcorper phasellus
                    semper
                  </p>
                  <Link to={Routes.home} className="btn btn-theme">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
