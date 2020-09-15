import React, { useState } from "react";
import { allCategories, getCategory } from "../../../services/dataService";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../InputWithIcon";
import { useEffect } from "react";

export default function ListingsSidebar(props) {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);

  console.log(props);

  const [categories, setCategories] = useState({ data: [] });

  useEffect(() => {
    const categories = allCategories();
    setCategories(categories);
    let categoryOptions = [];

    categories.data.map((category) => {
      return categoryOptions.push({ value: category.id, label: category.name });
    });

    setCategoryOptions(categoryOptions);
  }, []);

  useEffect(() => {
    setKeywords(props.keywords);
    setLocation(props.location);
    setCategoryId(props.categoryId);
  }, [props]);

  const handleOnChange = (event) => {};

  return (
    <div className="exlip-page-sidebar">
      <div className="sidebar-widgets">
        <Form>
          <Form.Group>
            <InputWithIcon
              type="text"
              name="location"
              placeholder="Keyword(s)..."
              value={keywords}
              onChange={handleOnChange}
              icon="ti-search"
            />
          </Form.Group>

          <Form.Group>
            <InputWithIcon
              type="text"
              name="location"
              value={location}
              onChange={handleOnChange}
              placeholder="Where..."
              icon="ti-target"
            />
          </Form.Group>

          <Form.Group>
            <div className="input-with-icon">
              <Form.Control
                as="select"
                id="list-category"
                name="categoryId"
                value={categoryId}
                onChange={handleOnChange}
                className="form-control"
                custom
              >
                <option value="">&nbsp;</option>
                {categories.data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
              <i className="fa fa-dog"></i>
            </div>
          </Form.Group>

          <div className="range-slider">
            <label>Radius</label>
            <div
              data-min="0"
              data-max="100"
              data-min-name="min_price"
              data-max-name="min_price"
              data-unit="Miles"
              className="range-slider-ui ui-slider"
              aria-disabled="false"
            ></div>
            <div className="clearfix"></div>
          </div>
        </Form>
      </div>
    </div>
  );
}
