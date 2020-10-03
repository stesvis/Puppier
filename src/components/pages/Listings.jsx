import * as listingsApiService from "../../services/api/listingsApiService";

import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import { Fragment } from "react";
import ListingCardDetailed from "./listings/ListingCardDetailed";
import ListingsGrid from "./listings/ListingsGrid";
import ListingsSidebar from "./listings/ListingsSidebar";
import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";
import SearchContext from "../../context/searchContext";
import { SearchParams } from "../../models/SearchParams";
import _ from "lodash";
import queryString from "query-string";
import { useRef } from "react";
import { useState } from "react";

export default function Listings(props) {
  const loadingContext = useContext(LoadingContext);
  const searchContext = useContext(SearchContext);

  const [listings, setListings] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const mounted = useRef(false);

  async function fetchListings(keywords, location, categoryId) {
    // const time = new Date().getTime();
    // console.log(`Start ${time}`);
    const response = await listingsApiService.search(
      keywords,
      location,
      categoryId
    );
    setListings(response.data.data);
    // console.log(`End ${time}`, response.data.data);
    return response.data;
  }

  // componentDidMount
  useEffect(() => {
    loadingContext.onStartedLoading();

    // queryParams: set by HomeSearchForm in the url after submitting a search
    const queryParams = queryString.parse(props.location.search);

    if (queryParams) {
      // updating searchParams will trigger the useEffect() in this page
      const newSearchParams = new SearchParams(
        queryParams.keywords,
        queryParams.location,
        queryParams.categoryId
      );
      setKeywords(queryParams.keywords);
      setLocation(queryParams.location);
      setCategoryId(queryParams.categoryId);
      searchContext.onSetSearchParams(newSearchParams);
    }
    loadingContext.onFinishedLoading();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // componentDidUpdate -> searchParameters
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    loadingContext.onStartedLoading();

    // executed every time the searchParams are updated
    fetchListings(
      searchContext.searchParameters.keywords,
      searchContext.searchParameters.location,
      parseInt(searchContext.searchParameters.categoryId)
    );

    loadingContext.onFinishedLoading();

    return () => {};
  }, [searchContext.searchParameters]);

  return (
    <Fragment>
      <PageTitle title="Explore" subtitle="Find your new best friend" />
      <section className="gray">
        <Container>
          <Row>
            <Col lg={4} md={4} className="order-2 order-lg-1 order-md-1">
              <ListingsSidebar
                keywords={keywords}
                location={location}
                categoryId={categoryId}
              />
            </Col>
            <Col
              lg={8}
              md={8}
              className="order-1 content-area order-md-2 order-lg-2"
            >
              <ListingsGrid listings={listings} />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
