import React, { useState } from "react";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../InputWithIcon";
import { Select2Wrapper } from "../../Select2Wrapper";
import { allCategories } from "../../../services/dataService";
import { useEffect } from "react";

export default function ListingsSidebar(props) {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [categories, setCategories] = useState({ data: [] });

  useEffect(() => {
    const categories = allCategories();
    setCategories(categories);
    let categoryOptions = [];

    categories.data.map((category) => {
      return categoryOptions.push({ value: category.id, label: category.name });
    });
  }, []);

  useEffect(() => {
    setKeywords(props.keywords);
    setLocation(props.location);
    setCategoryId(props.categoryId);
  }, [props]);

  const handleOnChange = (event) => {
    console.log(event);
  };

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
              <Select2Wrapper
                value={categoryId}
                onChange={handleOnChange}
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
