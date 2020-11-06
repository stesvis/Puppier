import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import React, { useEffect, useState } from "react";

import Dropzone from "react-dropzone";
import Joi from "joi-browser";
import PageTitle from "../../common/PageTitle";
import apiService from "../../../services/api/apiService";
import formService from "../../../services/formService";
import logService from "../../../services/logService";
import { toast } from "react-toastify";

// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-javascript
// https://www.npmjs.com/package/react-places-autocomplete
// https://upmostly.com/tutorials/react-dropzone-file-uploads-react
// https://react-dropzone.netlify.app/#!/Previews

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";

//#region Helpers

const schema = {
  title: Joi.string().required().min(3).max(100).label("Title"),
  description: Joi.string().required().min(3).max(500).label("Description"),
  listing_category_id: Joi.number().required().min(1).max(2).label("Category"),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .label("Email"),
  phone: Joi.string().regex(phoneRegex).label("Phone"),
  address: Joi.string().required().label("Address"),
  price: Joi.number().required(),
};
//#endregion

export default function ListingForm(props) {
  const { currentUser } = props;

  const initialState = {
    title: "",
    description: "",
    listing_category_id: 0,
    address: "",
    location: "", // coordinates: "latitude,longitude"
    price: "",
    email: currentUser.email,
    phone: currentUser.phone,
    errors: {},
    isBusy: false,
  };

  const [state, setState] = useState(initialState);

  const [categories, setCategories] = useState([]);
  const [imageSrc, setImageSrc] = useState();

  async function getCategories() {
    const response = await apiService.categories.all();
    setCategories(response.data.data);
    return response.data.data;
  }

  useEffect(() => {
    getCategories();
  }, []);

  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        console.log(reader.result);
        setImageSrc(reader.result);
      },
      false
    );
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    // console.log("Event", event);
    const { name, value } = event.target;

    const fieldError = formService.validateField(name, value, schema);

    const newState = {
      ...state,
      [name]: value,
      errors: { ...state.errors, [name]: fieldError },
    };
    setState(newState);
  };

  //#region Address autocomplete
  const handleAddressChange = (address) => {
    updateAddressState(address);
  };

  const handleAddressSelect = async (address) => {
    try {
      const result = await geocodeByAddress(address);
      console.log(result);
      const coordinates = await getLatLng(result[0]);
      const location = `${coordinates.lat},${coordinates.lng}`;
      console.log(location);
      updateAddressState(address, location);
    } catch (error) {
      toast.error(logService.extractErrorMessage(error));
    }
  };

  const updateAddressState = (address, location = "") => {
    const fieldError = formService.validateField("address", address, schema);

    const newState = {
      ...state,
      address: address,
      location: location,
      errors: { ...state.errors, address: fieldError },
    };
    setState(newState);
  };
  //#endregion

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
  };

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
              <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="add-listing-form form-submit">
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-medall-alt"></i> General information
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Form.Group>
                        <label>
                          Title <span className="text-danger">*</span>
                        </label>
                        <Form.Control
                          type="text"
                          placeholder="Title"
                          name="title"
                          value={state.title}
                          onChange={handleChange}
                        />
                        <Alert
                          variant="danger"
                          show={
                            state.errors.title
                              ? state.errors.title.length > 0
                              : false
                          }>
                          {state.errors.title}
                        </Alert>
                      </Form.Group>

                      <Form.Group>
                        <label>
                          Category <span className="text-danger">*</span>
                        </label>
                        <select
                          id="list-category"
                          className="form-control select2-container--default"
                          name="listing_category_id"
                          value={state.listing_category_id}
                          onChange={handleChange}>
                          <option value="">&nbsp;</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                        <Alert
                          variant="danger"
                          show={
                            state.errors.listing_category_id
                              ? state.errors.listing_category_id.length > 0
                              : false
                          }>
                          {state.errors.listing_category_id}
                        </Alert>
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
                        <label>
                          Description <span className="text-danger">*</span>
                        </label>
                        <Form.Control
                          as="textarea"
                          className="form-control"
                          placeholder="Listing Description"
                          name="description"
                          value={state.description}
                          onChange={handleChange}></Form.Control>
                      </Form.Group>
                      <Alert
                        variant="danger"
                        show={
                          state.errors.description
                            ? state.errors.description.length > 0
                            : false
                        }>
                        {state.errors.description}
                      </Alert>
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
                          <Dropzone
                            multiple={false}
                            maxSize={2000000} // 2MB
                            onDrop={handleDrop}
                            accept={acceptedFileTypes}>
                            {({ getRootProps, getInputProps, isDragActive }) =>
                              imageSrc !== null &&
                              imageSrc !== "" &&
                              imageSrc !== undefined ? (
                                <div className="text-center">
                                  <Image
                                    src={imageSrc}
                                    fluid
                                    rounded
                                    thumbnail
                                  />
                                  <Form.Label className="text-danger">
                                    Delete me
                                  </Form.Label>
                                </div>
                              ) : (
                                // </div>
                                <>
                                  <div
                                    className="dropzone dz-clickable text-center"
                                    {...getRootProps()}>
                                    {}
                                    <i className="lni-upload"></i>
                                    <input {...getInputProps()} />
                                    {isDragActive
                                      ? "Drop it like it's hot!"
                                      : "Click me or drag a file to upload!"}
                                  </div>
                                  <label className="smart-text">
                                    Maximum file size: 2 MB.
                                  </label>
                                </>
                              )
                            }
                          </Dropzone>
                        </Col>

                        {/* <Col lg={4} md={6}>
                          <Dropzone
                            onDrop={handleDrop}
                            accept={acceptedFileTypes}>
                            {({
                              getRootProps,
                              getInputProps,
                              isDragActive,
                            }) => (
                              <div
                                className="dropzone dz-clickable"
                                {...getRootProps()}>
                                <i className="lni-upload"></i>
                                <input {...getInputProps()} />
                                {isDragActive
                                  ? "Drop it like it's hot!"
                                  : "Click me or drag a file to upload!"}
                              </div>
                            )}
                          </Dropzone>
                          <label className="smart-text">
                            Maximum file size: 2 MB.
                          </label>
                        </Col>

                        <Col lg={4} md={12}>
                          <Dropzone
                            onDrop={handleDrop}
                            accept={acceptedFileTypes}>
                            {({
                              getRootProps,
                              getInputProps,
                              isDragActive,
                            }) => (
                              <div
                                className="dropzone dz-clickable"
                                {...getRootProps()}>
                                <i className="lni-upload"></i>
                                <input {...getInputProps()} />
                                {isDragActive
                                  ? "Drop it like it's hot!"
                                  : "Click me or drag a file to upload!"}
                              </div>
                            )}
                          </Dropzone>
                          <label className="smart-text">
                            Maximum file size: 2 MB.
                          </label>
                        </Col> */}
                      </Row>
                    </div>
                  </div>

                  <div
                    className="tr-single-box"
                    style={{ overflow: "inherit" }}>
                    <div className="tr-single-header">
                      <h4>
                        <i className="ti-headphone"></i> Location information
                      </h4>
                    </div>

                    <div className="tr-single-body">
                      <Row>
                        <Col lg={12} md={12}>
                          <Form.Group>
                            <label>
                              Address <span className="text-danger">*</span>
                            </label>
                            <PlacesAutocomplete
                              value={state.address}
                              onChange={handleAddressChange}
                              onSelect={handleAddressSelect}>
                              {({
                                getInputProps,
                                suggestions,
                                getSuggestionItemProps,
                                loading,
                              }) => (
                                <>
                                  <Form.Control
                                    name="address"
                                    {...getInputProps({
                                      placeholder: "Search Places ...",
                                      className: "location-search-input",
                                    })}
                                  />
                                  {suggestions.length > 0 && (
                                    <div className="autocomplete-dropdown-container">
                                      {loading && <div>Loading...</div>}
                                      {suggestions.map((suggestion) => {
                                        const className = suggestion.active
                                          ? "suggestion-item--active"
                                          : "suggestion-item";
                                        return (
                                          <div
                                            {...getSuggestionItemProps(
                                              suggestion,
                                              { className }
                                            )}
                                            key={suggestion.placeId}>
                                            <span>
                                              {suggestion.description}
                                            </span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </>
                              )}
                            </PlacesAutocomplete>
                            <Alert
                              variant="danger"
                              show={
                                state.errors.address
                                  ? state.errors.address.length > 0
                                  : false
                              }>
                              {state.errors.address}
                            </Alert>
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
                            <label>
                              Email <span className="text-danger">*</span>
                            </label>
                            <Form.Control
                              type="email"
                              placeholder="business@gmail.com"
                              name="email"
                              value={state.email}
                              onChange={handleChange}
                            />
                            <Alert
                              variant="danger"
                              show={
                                state.errors.email
                                  ? state.errors.email.length > 0
                                  : false
                              }>
                              {state.errors.email}
                            </Alert>
                          </Form.Group>
                        </Col>

                        <Col lg={6} md={6}>
                          <Form.Group>
                            <label>Mobile</label>
                            <Form.Control
                              type="text"
                              placeholder="91 245 254 8745"
                              name="phone"
                              value={state.phone}
                              onChange={handleChange}
                            />
                            <Alert
                              variant="danger"
                              show={
                                state.errors.phone
                                  ? state.errors.phone.length > 0
                                  : false
                              }>
                              {state.errors.phone}
                            </Alert>
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
                          <Form.Group>
                            <label>
                              Price ($) <span className="text-danger">*</span>
                            </label>
                            <Form.Control
                              type="text"
                              placeholder="e.g: 750"
                              name="price"
                              value={state.price}
                              onChange={handleChange}
                            />
                            <Alert
                              variant="danger"
                              show={
                                state.errors.price
                                  ? state.errors.price.length > 0
                                  : false
                              }>
                              {state.errors.price}
                            </Alert>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    className="btn-theme full-width"
                    type="submit">
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
