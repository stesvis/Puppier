import React, { useContext, useState } from "react";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../common/InputWithIcon";
import SearchContext from "../../../context/searchContext";
import { SearchParams } from "../../../models/SearchParams";
import apiService from "../../../services/api/apiService";
import { useEffect } from "react";

export default function ListingsSidebar(props) {
  const searchContext = useContext(SearchContext);
  const [categories, setCategories] = useState([]);
  // const [keywords, setKeywords] = useState("");
  // const [location, setLocation] = useState("");
  // const [categoryId, setCategoryId] = useState("");

  const initialState = {
    keywords: props.keywords,
    location: props.location,
    categoryId: props.categoryId,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function getCategories() {
      const response = await apiService.categories.all();
      setCategories(response.data.data);
      return response.data.data;
    }

    getCategories();
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    const newState = { ...state, [name]: value };
    setState(newState);

    searchContext.onSetSearchParams(
      new SearchParams(
        newState.keywords,
        newState.location,
        newState.categoryId
      )
    );
  };

  return (
    <div className="exlip-page-sidebar">
      <div className="sidebar-widgets">
        <Form>
          <Form.Group>
            <InputWithIcon
              type="text"
              name="keywords"
              defaultValue={props.keywords}
              onChange={handleOnChange}
              placeholder="Keyword(s)..."
              icon="ti-search"
            />
          </Form.Group>

          <Form.Group>
            <InputWithIcon
              type="text"
              name="location"
              defaultValue={props.location}
              onChange={handleOnChange}
              placeholder="Where..."
              icon="ti-target"
            />
          </Form.Group>

          <Form.Group>
            <div className="input-with-icon">
              <select
                defaultValue={props.categoryId}
                onChange={handleOnChange}
                className={"form-control select2-container--default"}
                id={"categoryId"}
                name={"categoryId"}
                data={{
                  placeholder: "Select a category",
                }}
              >
                <option value="">All pets</option>
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
