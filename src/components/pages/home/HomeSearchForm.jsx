import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import InputWithIcon from "../../common/InputWithIcon";
import React from "react";
import { Routes } from "../../../services/api/routes";
import { Select2Wrapper } from "../../common/Select2Wrapper";
import logService from "../../../services/logService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function HomeSearchForm(props) {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  //#region Address autocomplete
  const handleAddressChange = (address) => {
    setLocation(address);
  };

  const handleAddressSelect = async (address) => {
    try {
      const result = await geocodeByAddress(address);
      console.log(result);
      const coordinates = await getLatLng(result[0]);
      const location = `${coordinates.lat},${coordinates.lng}`;
      console.log(location);
      setLocation(address);
    } catch (error) {
      toast.error(logService.extractErrorMessage(error));
    }
  };

  //#endregion

  const handleSubmit = (event) => {
    event.preventDefault();

    const keywords = event.target.keywords.value;
    const location = event.target.location.value;
    const categoryId = event.target.categoryId.value;

    // Perform the search api call
    history.push({
      pathname: Routes.listings,
      search: `keywords=${keywords}&location=${location}&categoryId=${categoryId}`,
    });
  };

  return (
    // <!-- ---------- Search Form -->
    <div
      className="full-search-2 italian-search hero-search-radius"
      style={{ overflow: "inherit" }}>
      <div className="hero-search-content">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4} md={4} sm={12} className="small-padd">
              <FormGroup>
                <InputWithIcon
                  type="text"
                  name="keywords"
                  className="b-r"
                  placeholder="Keyword(s)..."
                  icon="ti-search"
                />
              </FormGroup>
            </Col>

            <Col lg={3} md={3} sm={12} className="small-padd">
              <FormGroup>
                <PlacesAutocomplete
                  value={location}
                  onChange={handleAddressChange}
                  onSelect={handleAddressSelect}>
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <>
                      <InputWithIcon
                        name="location"
                        {...getInputProps({
                          placeholder: "Location...",
                          className: "location-search-input b-r",
                        })}
                        icon="ti-target"
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
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                })}
                                key={suggestion.placeId}>
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </PlacesAutocomplete>
                {/* <InputWithIcon
                  type="text"
                  name="location"
                  className="b-r"
                  placeholder="Location..."
                  icon="ti-target"
                /> */}
              </FormGroup>
            </Col>

            <Col lg={3} md={3} sm={6} className="small-padd">
              <FormGroup>
                <div className="input-with-icon">
                  <Select2Wrapper
                    className={"form-control"}
                    id={"categoryId"}
                    name={"categoryId"}
                    data={{
                      placeholder: "Select a category",
                    }}>
                    <option value="">&nbsp;</option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </Select2Wrapper>
                  <i className="fa fa-dog"></i>
                </div>
              </FormGroup>
            </Col>

            <Col lg={2} md={2} sm={12} className="small-padd">
              <FormGroup>
                <Button
                  type="submit"
                  className="btn search-btn"
                  style={{ border: "none" }}>
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
