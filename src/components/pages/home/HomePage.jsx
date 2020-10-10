import React, { useContext, useEffect, useState } from "react";

import FeaturedListings from "../listings/FeaturedListings";
import HomeBanner from "./HomeBanner";
import LoadingContext from "../../../context/loadingContext";
import apiService from "../../../services/api/apiService";

// import Axios from "axios";

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const loadingContext = useContext(LoadingContext);

  async function getCategories() {
    const response = await apiService.categories.all();
    setCategories(response.data.data);
    return response.data.data;
  }

  async function getFeaturedListings() {
    const featuredListings = await apiService.listings.getFeaturedListings();
    setFeaturedListings(featuredListings.data.data);
    // console.log(featuredListings.data.data);
    return featuredListings.data;
  }

  useEffect(() => {
    getCategories();
    getFeaturedListings();
  }, []);

  useEffect(() => {
    loadingContext.onStartedLoading();

    loadingContext.onFinishedLoading();
    //---------------
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Hero Banner  Start */}
      <HomeBanner categories={categories} />
      {/* Hero Banner End */}

      <FeaturedListings listings={featuredListings} />

      {/* <Button onClick={handleClick}>Click me</Button> */}
    </>
  );
}
