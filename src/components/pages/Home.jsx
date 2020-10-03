import * as listingsApiService from "../../services/api/listingsApiService";

import React, { useContext, useEffect, useState } from "react";

// import Axios from "axios";
import FeaturedListings from "./listings/FeaturedListings";
import HomeBanner from "./home/HomeBanner";
import LoadingContext from "../../context/loadingContext";

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    // Fetch single listing by id
    async function getFeaturedListings() {
      const featuredListings = await listingsApiService.getFeaturedListings();
      setFeaturedListings(featuredListings.data.data);
      // console.log(featuredListings.data.data);
      return featuredListings.data;
    }

    getFeaturedListings();
  }, []);

  // const handleClick = async () => {
  //   const $ = window.$;
  //   const tokenResponse = await Axios.post(
  //     "http://localhost:60000/token",
  //     $.param({
  //       username: "guest",
  //       password: "guest123?",
  //       grant_type: "password",
  //     }),
  //     {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   );

  //   console.log(tokenResponse.data);
  //   const token = tokenResponse.data.access_token;
  //   // const token =
  //   //   "7z4VGU8ScJYNw49t_lj40O_jFSKtHt7pKR20JEFlK4uo0xfJaMGXa3V7F-BNDMrO05SulVtO42AWPKDc81rLU5HhmmxcxFHw-ntjMdgcCiKTMpchzxONvaBt53taMzlkU0WI1-uYPnABCLot1rIeu9qgWIRNFVTDTSo1uAzR-LUSg3dtyYGj0mH7x6Gtwq-fM9HoBcOaIllOVdyglkSjSik_zOMIZUEaQr4MjkaS_2lI_CHRmq1VCxGvGSrp3nc4ZzLHAiOSZ0rASDpKDxlHH_q-rhO24RynoJALZS267F6qFwlPb-ClHR33iHYkiItL6mT6KUlqII8BgvpCKuC5XR2oftEGmwETzAtXo1jEqPFj0E9Gp1KW7RFxjKXSw0RB8LhaxCBqcHn9z_IcCWKsG4ezQEiV31ksp_A3fRKgVCFqMFvif4Q7e_U2V_HIojprsRuFUTDQb-WrU-Rjau_j8Tf4HQghmtQFMy-86HvGMznTNbZBzgNwXvOk_JdBZrbjobkYrK9KD8UXoqih1vrWKg";
  //   const productsResponse = await Axios.get(
  //     "http://localhost:60000/api/products?clientId=3",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );

  //   console.log(productsResponse.data);
  // };

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

      {/* <Button onClick={handleClick}>Click me</Button> */}
    </React.Fragment>
  );
}
