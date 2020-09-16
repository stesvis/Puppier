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
import SearchContext from "../../../context/searchContext";
import { Select2Wrapper } from "../../Select2Wrapper";
import { allCategories } from "../../../services/dataService";
import { useContext } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function HomeSearchForm(props) {
  const history = useHistory();
  const [categories, setCategories] = useState({ data: [] });
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    const categories = allCategories();
    setCategories(categories);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    searchContext.onSetSearchParams({
      keywords: event.target.keywords.value,
      location: event.target.location.value,
      categoryId: event.target.categoryId.value,
    });

    const keywords = event.target.keywords.value;
    const location = event.target.location.value;
    const categoryId = event.target.categoryId.value;

    // Perform the search api call
    console.log(
      `keywords=[${keywords}], location=[${location}], category=[${categoryId}]`
    );

    history.push({
      pathname: "/listings",
      // search: `keywords=${keywords}&location=${location}&categoryId=${categoryId}`,
    });
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
                  placeholder="Keyword(s)..."
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
                  <Select2Wrapper
                    className={"form-control"}
                    id={"categoryId"}
                    name={"categoryId"}
                    data={{
                      placeholder: "Select a category",
                    }}
                  >
                    <option value="">&nbsp;</option>
                    {categories.data.map((category) => (
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
