// // TODO: class and function behave differently:
// //  - function renders the featured listings in a vertical list (wrong)
// //  - class renders featured listings in a carousel (correct)

// import React, { useContext, useEffect, useState } from "react";

// import FeaturedListings from "./FeaturedListings";
// import HomeBanner from "../HomeBanner";
// import LoadingContext from "../../context/loadingContext";
// import { getFeaturedListings } from "../../services/dataService";

// export default function Home() {
//   const [featuredListings, setFeaturedListings] = useState([]);
//   const loadingContext = useContext(LoadingContext);

//   const fetchData = () => {
//     // fetch FeaturedListings API (coming from dataService for now)
//     const featuredListings = getFeaturedListings();
//     return featuredListings;
//   };

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

//     loadingContext.onStartedLoading();
//     // Fetch single listing by id
//     setTimeout(function () {
//       const featuredListings = fetchData();
//       setFeaturedListings(featuredListings);
//       loadingContext.onFinishedLoading();
//     }, 1000); //wait 2 seconds

//     //---------------
//   }, []);

//   return (
//     <React.Fragment>
//       {/* Hero Banner  Start */}
//       <HomeBanner />
//       {/* Hero Banner End */}

//       <FeaturedListings listings={featuredListings} />
//     </React.Fragment>
//   );
// }

//****************************** CLASS ******************************/

import React, { Component, Fragment } from "react";

import FeaturedListings from "./FeaturedListings";
import HomeBanner from "../HomeBanner";
import LoadingContext from "../../context/loadingContext";
import { getFeaturedListings } from "../../services/dataService";

export default class Home extends Component {
  static loadingContext = LoadingContext;

  state = {
    featuredListings: [],
  };

  fetchData() {
    // fetch FeaturedListings API (coming from dataService for now)
    const featuredListings = getFeaturedListings();
    return featuredListings;
  }

  loadScript = function (src) {
    var tag = document.createElement("script");
    tag.id = "custom_js";
    tag.async = false;
    tag.src = src;
    console.log(tag);
    document.body.appendChild(tag);
  };

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

    // this.context.onStartedLoading();
    const featuredListings = this.fetchData();
    this.setState({ featuredListings: featuredListings });
    // this.context.onFinishedLoading();
  }

  render() {
    return (
      <LoadingContext.Consumer>
        {(LoadingContext) => (
          <Fragment>
            {/* Hero Banner  Start */}
            <HomeBanner />
            {/* Hero Banner End */}

            <FeaturedListings listings={this.state.featuredListings} />
          </Fragment>
        )}
      </LoadingContext.Consumer>
    );
  }
}
