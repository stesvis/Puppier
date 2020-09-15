import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";

import InputWithIcon from "../../InputWithIcon";
import React from "react";
import { findListings } from "../../../services/dataService";

export default function HomeSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const keywords = event.target.keywords.value;
    const location = event.target.location.value;
    const categoryId = event.target.category.value;

    // Perform the search api call
    console.log(
      `keywords=[${keywords}], location=[${location}], category=[${categoryId}]`
    );

    const searchResults = findListings(
      keywords,
      location,
      parseInt(categoryId)
    );
    console.log(searchResults);
  };

  return (
    // <!-- ---------- Search Form -->
    <div className="full-search-2 italian-search hero-search-radius">
      <div className="hero-search-content">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4} md={4} sm={12} className="small-padd">
              <FormGroup>
                <InputWithIcon
                  type="text"
                  name="keywords"
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
                  name="location"
                  className="b-r"
                  placeholder="Location..."
                  icon="ti-target"
                />
              </FormGroup>
            </Col>

            <Col lg={3} md={3} sm={6} className="small-padd">
              <FormGroup>
                <div className="input-with-icon">
                  <FormControl
                    as="select"
                    id="list-category"
                    name="category"
                    custom
                  >
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
                <Button
                  type="submit"
                  className="btn search-btn"
                  style={{ border: "none" }}
                >
                  Search
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    // ---------- Search Form
  );
}
