import * as categoriesApiService from "../../../services/api/categoriesApiService";

import React, { useContext, useState } from "react";
import { Select2Wrapper, Select2WrapperMemo } from "../../Select2Wrapper";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../InputWithIcon";
import SearchContext from "../../../context/searchContext";
import { SearchParams } from "../../../models/SearchParams";
import { useEffect } from "react";

export default function ListingsSidebar(props) {
  const searchContext = useContext(SearchContext);
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState(
    searchContext.searchParameters.keywords
  );
  const [location, setLocation] = useState(
    searchContext.searchParameters.location
  );
  const [categoryId, setCategoryId] = useState(
    searchContext.searchParameters.categoryId
  );

  useEffect(() => {
    async function getCategories() {
      const response = await categoriesApiService.all();
      setCategories(response.data.data);
      return response.data.data;
    }

    getCategories();
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    // TODO: why does this fire so many times??

    console.log(name, value);
    switch (name) {
      case "keywords":
        setKeywords(value);
        searchContext.onSetSearchParams(
          new SearchParams(value, location, categoryId)
        );
        break;
      case "location":
        setLocation(value);
        searchContext.onSetSearchParams(
          new SearchParams(keywords, value, categoryId)
        );
        break;
      case "categoryId":
        setCategoryId(value);
        searchContext.onSetSearchParams(
          new SearchParams(keywords, location, value)
        );
        break;

      default:
        break;
    }
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
              <select //Select2WrapperMemo
                value={categoryId}
                onChange={handleOnChange}
                className={"form-control"}
                id={"categoryId"}
                name={"categoryId"}
                data={{
                  placeholder: "Select a category",
                }}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <i className="fa fa-dog"></i>
            </div>
          </Form.Group>

          {/* <div className="range-slider">
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
          </div> */}
        </Form>
      </div>
    </div>
  );
}
