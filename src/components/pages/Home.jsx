import React, { useContext, useEffect, useState } from "react";

import FeaturedListings from "./listings/FeaturedListings";
import HomeBanner from "./home/HomeBanner";
import LoadingContext from "../../context/loadingContext";

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const loadingContext = useContext(LoadingContext);

  // console.log(process.env);

  useEffect(() => {
    loadingContext.onStartedLoading();

    loadingContext.onFinishedLoading();
    //---------------
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {/* Hero Banner  Start */}
      <HomeBanner />
      {/* Hero Banner End */}

      <FeaturedListings listings={featuredListings} />
    </React.Fragment>
  );
}
