import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";

export default function ListingOverview() {
  return (
    <section className="p-0">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} md={12} sm={12}>
            <div className="rixel-bar">
              <div className="rixel-bar-left">
                <div className="rate-overall rate-high">
                  <div className="overrate-box">4.7</div>
                  <div className="overrate-box-caption">
                    <span>Very Good</span>
                    <Link to="#" className="rating-link">
                      110 reviewers rated
                    </Link>
                  </div>
                </div>

                <div className="separate-rated">
                  <div className="singlewise-rated">
                    <h6 className="sngl-rated rated-high">4.7</h6>
                    <span className="rate-status">Location</span>
                  </div>
                  <div className="singlewise-rated">
                    <h6 className="sngl-rated rated-good">4.2</h6>
                    <span className="rate-status">Space</span>
                  </div>
                  <div className="singlewise-rated">
                    <h6 className="sngl-rated rated-poor">2.9</h6>
                    <span className="rate-status">Price</span>
                  </div>
                  <div className="singlewise-rated">
                    <h6 className="sngl-rated rated-mid">4.1</h6>
                    <span className="rate-status">Quality</span>
                  </div>
                  <div className="singlewise-rated">
                    <h6 className="sngl-rated rated-good">4.2</h6>
                    <span className="rate-status">Services</span>
                  </div>
                </div>
              </div>

              <div className="rixel-bar-right">
                <div className="auth-call-wrap">
                  <div className="call-ic-box">
                    <i className="lni-phone-handset"></i>
                  </div>
                  <div className="call-ic-box-caption">
                    <span>Call Now</span>
                    <h5 className="aut-call">91 523 658 5487</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
