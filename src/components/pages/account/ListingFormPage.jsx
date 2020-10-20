import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import PageTitle from "../../common/PageTitle";
import apiService from "../../../services/api/apiService";

// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-javascript
// https://www.npmjs.com/package/react-places-autocomplete

export default function ListingForm(props) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const response = await apiService.categories.all();
    setCategories(response.data.data);
    return response.data.data;
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <PageTitle
        title={props.id > 0 ? "Edit Listing" : "Add Listing"}
        subtitle="Find a great owner for your pet!"
      />
      <section className="gray">
        <Container>
          {/* <Row className="justify-content-md-center">
            <Col lg={8} md={12} sm={12}>
              <h4 className="modal-header-title">
                {props.id > 0 ? "Edit" : "Add"}{" "}
                <span className="theme-cl">Listing</span>
              </h4>
            </Col>
          </Row> */}
          <Row className="justify-content-md-center">
            <Col lg={10} md={10} sm={12}>
              <Form>
                <div className="add-listing-form form-submit">
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-medall-alt"></i> General information
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Form.Group>
                        <label>Title*</label>
                        <Form.Control type="text" placeholder="Title" />
                      </Form.Group>

                      <Form.Group>
                        <label>Category</label>
                        <select
                          id="list-category"
                          className="form-control select2-container--default">
                          <option value="">&nbsp;</option>
                          {categories.map((category) => (
                            <option value={category.id}>{category.name}</option>
                          ))}
                        </select>
                      </Form.Group>

                      {/* <div className="form-group">
                      <label>Tagline</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Tagline"
                      />
                    </div> */}

                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                          as="textarea"
                          className="form-control"
                          placeholder="Listing Description"></Form.Control>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-image"></i> Gallery
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Row>
                        <Col lg={4} md={6}>
                          <Form
                            action="/file-upload"
                            className="dropzone"
                            id="single-logo">
                            <i className="lni-upload"></i>
                          </Form>
                          <label className="smart-text">
                            Maximum file size: 2 MB.
                          </label>
                        </Col>

                        <Col lg={4} md={6}>
                          <Form
                            action="/file-upload"
                            className="dropzone"
                            id="featured-image">
                            <i className="lni-upload"></i>
                          </Form>
                          <label className="smart-text">
                            Maximum file size: 2 MB.
                          </label>
                        </Col>

                        <Col lg={4} md={12}>
                          <form
                            action="/file-upload"
                            className="dropzone"
                            id="gallery">
                            <i className="lni-upload"></i>
                          </form>
                          <label className="smart-text">
                            Maximum file size: 2 MB.
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-headphone"></i> Location information
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Row>
                        <Col lg={12} md={12}>
                          <Form.Group>
                            <label>Address</label>
                            <Form.Control
                              type="text"
                              placeholder="Start typing the address or location"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-headphone"></i> Lister information
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Row>
                        <Col lg={6} md={6}>
                          <Form.Group>
                            <label>Email</label>
                            <Form.Control
                              type="email"
                              placeholder="business@gmail.com"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={6} md={6}>
                          <Form.Group>
                            <label>Mobile</label>
                            <Form.Control
                              type="text"
                              placeholder="91 245 254 8745"
                            />
                          </Form.Group>
                        </Col>

                        {/* <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Website</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="https://yoursite.com/"
                          />
                        </div>
                      </div> */}
                      </Row>
                    </div>
                  </div>

                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-video-clapper"></i> Video Link
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Form.Group>
                        <label>Video Link</label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </div>
                  </div>

                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="lni-credit-cards"></i> Price
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Row>
                        <Col lg={4} md={6}>
                          <label>Price ($) *</label>
                          <Form.Control type="text" placeholder="e.g: 750" />
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <Button className="btn-theme full-width" type="submit">
                    Submit & Preview
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
