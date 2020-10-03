import React, { useContext, useState } from "react";

import { Form } from "react-bootstrap";
import InputWithIcon from "../../InputWithIcon";
import SearchContext from "../../../context/searchContext";
import { SearchParams } from "../../../models/SearchParams";
import { Select2WrapperMemo } from "../../Select2Wrapper";
import apiService from "../../../services/api/apiService";
import { useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";

export default function ListingsSidebar(props) {
  const searchContext = useContext(SearchContext);
  const [categories, setCategories] = useState([]);
  const initialState = {
    keywords: "",
    location: "",
    categoryId: "",
  };
  const searchFormReducer = (prevState, action) => {
    switch (action.type) {
      case "onChange":
        return {
          ...prevState,
          [action.payload.fieldName]:
            action.payload.value === undefined ? "" : action.payload.value,
        };

      default:
        return prevState;
    }
  };

  const [state, dispatch] = useReducer(searchFormReducer, initialState);
  const { keywords, location, categoryId } = state;
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    // set the current state
    dispatch({
      type: "onChange",
      payload: {
        fieldName: "keywords",
        value: props.keywords,
      },
    });
    dispatch({
      type: "onChange",
      payload: {
        fieldName: "location",
        value: props.location,
      },
    });
    dispatch({
      type: "onChange",
      payload: {
        fieldName: "categoryId",
        value: props.categoryId,
      },
    });
  }, [props]);

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
    dispatch({
      type: "onChange",
      payload: {
        fieldName: name,
        value: value,
      },
    });

    searchContext.onSetSearchParams(
      new SearchParams(state.keywords, state.location, state.categoryId)
    );

    // console.log(name, value);
  };

  return (
    <div className="exlip-page-sidebar">
      <div className="sidebar-widgets">
        <label>{keywords}</label>
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
