import React, { useContext, useEffect } from "react";

import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";
import { all } from "../../services/dataService";
import { useState } from "react";

export default function Listings(props) {
  // static contextType = LoadingContext;
  const loadingContext = useContext(LoadingContext);
  const [listings, setListings] = useState({});

  useEffect(() => {
    loadingContext.onStartedLoading();
    // Fetch single listing by id
    setTimeout(function () {
      const listings = all();
      setListings(listings);
      loadingContext.onFinishedLoading();
    }, process.env.REACT_APP_FAKE_API_DELAY); //wait 1 seconds
  }, []);

  return <PageTitle title="Explore" subtitle="Find your new best friend" />;
}
