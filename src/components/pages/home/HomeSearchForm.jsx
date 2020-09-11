import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";

import InputWithIcon from "../../InputWithIcon";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

export default function HomeSearchForm() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    let { name, value } = event.target; // extract those two values

    switch (name) {
      case "keywords":
        setKeywords(value);
        break;

      case "location":
        setLocation(value);
        break;

      case "category":
        setCategory(value);
        break;

      default:
        break;
    }
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
                  value={keywords}
                  onChange={handleChange}
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
                  value={location}
                  onChange={handleChange}
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
                    value={category}
                    onChange={handleChange}
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
                {/* <Link
                  to={`/listings?keywords=${keywords}`}
                  className="btn search-btn"
                  onClick={handleSearch}
                >
                  Search
                </Link> */}
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
