// TODO: class and function behave differently:
//  - function renders the featured listings in a vertical list (wrong)
//  - class renders featured listings in a carousel (correct)

// import React, { useEffect, useState } from "react";

// import Banner from "../Banner";
// import FeaturedListings from "./FeaturedListings";

// export default function Home() {
//   const [featuredListings, setFeaturedListings] = useState([]);

//   function fetchData() {
//     console.log("Home -> fetchData()");
//     // fetch FeaturedListings API
//     const featuredListings = [1, 2, 3, 4, 5];
//     return featuredListings;
//   }

//   useEffect(() => {
//     console.log("Home -> useEffect()");

//     const $ = window.$;
//     // Update the document title using the browser API
//     $(".hero-banner").circleMagic({
//       elem: ".hero-banner",
//       color: "rgba(255,255,255,.5)",
//       radius: 10,
//       densety: 0.3,
//       clearOffset: 0.2,
//     });

//     const featuredListings = fetchData();
//     setFeaturedListings(featuredListings);
//   }, []);

//   return (
//     <React.Fragment>
//       {/* Hero Banner  Start */}
//       <Banner />
//       {/* Hero Banner End */}

//       <FeaturedListings listings={featuredListings} />
//     </React.Fragment>
//   );
// }

//****************************** CLASS ******************************/

import React, { Component } from "react";

import FeaturedListings from "./FeaturedListings";
import HomeBanner from "../HomeBanner";
import { getFeaturedListings } from "../../services/dataService";

export default class Home extends Component {
  state = {
    featuredListings: [],
  };

  fetchData() {
    // fetch FeaturedListings API (coming from dataService for now)
    const featuredListings = getFeaturedListings();
    return featuredListings;
  }

  componentDidMount() {
    const $ = window.$;
    // Update the document title using the browser API
    $(".hero-banner").circleMagic({
      elem: ".hero-banner",
      color: "rgba(255,255,255,.5)",
      radius: 10,
      densety: 0.3,
      clearOffset: 0.2,
    });

    const featuredListings = this.fetchData();
    this.setState({ featuredListings: featuredListings.data });
  }

  render() {
    return (
      <React.Fragment>
        {/* Hero Banner  Start */}
        <HomeBanner />
        {/* Hero Banner End */}

        <FeaturedListings listings={this.state.featuredListings} />
      </React.Fragment>
    );
  }
}
