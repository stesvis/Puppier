import React, { useContext, useState } from "react";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../InputWithIcon";
import SearchContext from "../../../context/searchContext";
import { SearchParams } from "../../../models/SearchParams";
import { Select2Wrapper } from "../../Select2Wrapper";
import { allCategories } from "../../../services/dataService";
import { useEffect } from "react";

export default function ListingsSidebar(props) {
  const searchContext = useContext(SearchContext);
  const [categories, setCategories] = useState({ data: [] });

  useEffect(() => {
    console.log(
      "ListingsSidebar search parameters",
      searchContext.searchParameters
    );
    const categories = allCategories();
    setCategories(categories);
    let categoryOptions = [];

    categories.data.map((category) => {
      return categoryOptions.push({ value: category.id, label: category.name });
    });
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    searchContext.searchParameters[name] = value;
    searchContext.onSetSearchParams(searchContext.searchParameters);

    console.log(searchContext.searchParameters);
  };

  return (
    <div className="exlip-page-sidebar">
      <div className="sidebar-widgets">
        <Form>
          <Form.Group>
            <InputWithIcon
              type="text"
              name="keywords"
              placeholder="Keyword(s)..."
              value={
                searchContext.searchParameters
                  ? searchContext.searchParameters.keywords
                  : ""
              }
              onChange={handleOnChange}
              icon="ti-search"
            />
          </Form.Group>

          <Form.Group>
            <InputWithIcon
              type="text"
              name="location"
              value={
                searchContext.searchParameters
                  ? searchContext.searchParameters.location
                  : ""
              }
              onChange={handleOnChange}
              placeholder="Where..."
              icon="ti-target"
            />
          </Form.Group>

          <Form.Group>
            <div className="input-with-icon">
              <Select2Wrapper
                value={
                  searchContext.searchParameters
                    ? searchContext.searchParameters.categoryId
                    : ""
                }
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
