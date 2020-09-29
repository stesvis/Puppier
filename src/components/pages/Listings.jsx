import * as listingsApiService from "../../services/api/listingsApiService";

import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import { Fragment } from "react";
import ListingCardDetailed from "./listings/ListingCardDetailed";
import ListingsSidebar from "./listings/ListingsSidebar";
import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";
import SearchContext from "../../context/searchContext";
import { SearchParams } from "../../models/SearchParams";
import queryString from "query-string";
import { useState } from "react";

export default function Listings(props) {
  const loadingContext = useContext(LoadingContext);
  const searchContext = useContext(SearchContext);

  const [listings, setListings] = useState([]);

  async function filterListings(keywords, location, categoryId) {
    const response = await listingsApiService.search(
      keywords,
      location,
      categoryId
    );
    setListings(response.data.data);
    return response.data;
  }

  // componentDidMount
  useEffect(() => {
    loadingContext.onStartedLoading();

    // queryParams: set by HomeSearchForm in the url after submitting a search
    const queryParams = queryString.parse(props.location.search);

    if (queryParams) {
      // set the global searchParams state
      searchContext.onSetSearchParams(
        new SearchParams(
          queryParams.keywords,
          queryParams.location,
          queryParams.categoryId
        )
      );

      console.log("first try");

      // TODO: why do I have to do this to make it work??
      filterListings(
        queryParams.keywords,
        queryParams.location,
        parseInt(queryParams.categoryId)
      );

      // updating searchParams will trigger the useEffect() in this page
    }
    loadingContext.onFinishedLoading();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // componentDidUpdate -> searchParameters
  useEffect(() => {
    loadingContext.onStartedLoading();

    console.log("another try");
    // executed every time the searchParams are updated
    filterListings(
      searchContext.searchParameters.keywords,
      searchContext.searchParameters.location,
      parseInt(searchContext.searchParameters.categoryId)
    );
    loadingContext.onFinishedLoading();

    return () => {};
  }, [
    // searchContext.searchParameters,
    searchContext.searchParameters.keywords,
    searchContext.searchParameters.location,
    searchContext.searchParameters.categoryId,
  ]);

  return (
    <Fragment>
      <PageTitle title="Explore" subtitle="Find your new best friend" />
      <section className="gray">
        <Container>
          <Row>
            <Col lg={4} md={4} className="order-2 order-lg-1 order-md-1">
              <ListingsSidebar />
            </Col>
            <Col
              lg={8}
              md={8}
              className="order-1 content-area order-md-2 order-lg-2"
            >
              <Row>
                {listings.map((listing) => (
                  <Col lg={6} md={12} sm={12} key={listing.id}>
                    <ListingCardDetailed listing={listing} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
