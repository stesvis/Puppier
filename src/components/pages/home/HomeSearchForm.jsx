import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";

import InputWithIcon from "../../InputWithIcon";
import { Link } from "react-router-dom";
import React from "react";

export default function HomeSearchForm() {
  return (
    // <!-- ---------- Search Form -->
    <div className="full-search-2 italian-search hero-search-radius">
      <div className="hero-search-content">
        <Row>
          <Col lg={4} md={4} sm={12} className="small-padd">
            <FormGroup>
              <InputWithIcon
                type="text"
                className="b-r"
                placeholder="Keywords..."
                icon="ti-search"
              />
            </FormGroup>
          </Col>

          <Col lg={3} md={3} sm={12} className="small-padd">
            <FormGroup>
              <InputWithIcon
                type="text"
                className="b-r"
                placeholder="Location..."
                icon="ti-target"
              />
            </FormGroup>
          </Col>

          <Col lg={3} md={3} sm={6} className="small-padd">
            <FormGroup>
              <div className="input-with-icon">
                <FormControl as="select" id="list-category" custom>
                  <option value="">&nbsp;</option>
                  <option value="1">Dog</option>
                  <option value="2">Cat</option>
                </FormControl>
                <i className="fa fa-dog"></i>
              </div>
            </FormGroup>
          </Col>

          <Col lg={2} md={2} sm={12} className="small-padd">
            <FormGroup>
              <Link to="#" className="btn search-btn">
                Search
              </Link>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </div>
    // ---------- Search Form
  );
}
