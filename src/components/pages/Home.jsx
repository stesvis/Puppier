import React, { useContext, useEffect, useState } from "react";

import FeaturedListings from "../listings/FeaturedListings";
import HomeBanner from "../HomeBanner";
import LoadingContext from "../../context/loadingContext";
import { getFeaturedListings } from "../../services/dataService";

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const loadingContext = useContext(LoadingContext);

  // console.log(process.env);

  const fetchData = () => {
    // fetch FeaturedListings API (coming from dataService for now)
    const featuredListings = getFeaturedListings();
    return featuredListings;
  };

  useEffect(() => {
    console.log("Home -> useEffect()");
    loadingContext.onStartedLoading();
    // Fetch single listing by id
    setTimeout(function () {
      const featuredListings = fetchData();
      setFeaturedListings(featuredListings);
      loadingContext.onFinishedLoading();
    }, process.env.REACT_APP_FAKE_API_DELAY); //wait 2 seconds

    //---------------
  }, []);

  return (
    <React.Fragment>
      {/* Hero Banner  Start */}
      <HomeBanner />
      {/* Hero Banner End */}

      <FeaturedListings listings={featuredListings} />
    </React.Fragment>
  );
}
