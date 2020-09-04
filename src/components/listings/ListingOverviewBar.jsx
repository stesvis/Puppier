// import { Col, Container, Row } from "react-bootstrap";

import React from "react";

export default function ListingOverviewBar(props) {
  const { listing } = props;

  return (
    <section className="p-0">
      {/* <Container> */}
      <div className="align-items-center">
        {/* <Col lg={12} md={12} sm={12}> */}
        <div className="rixel-bar">
          <div className="rixel-bar-left">
            <div className="rate-overall rate-high">
              {/* <div className="overrate-box">4.7</div> */}
              <div className="overrate-box-caption">
                <h3 style={{ margin: "0" }}>{listing.price}</h3>
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
                <h5 className="aut-call">{listing.author.phone}</h5>
              </div>
            </div>
          </div>
        </div>
        {/* </Col> */}
      </div>
      {/* </Container> */}
    </section>
  );
}
