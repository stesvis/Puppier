import React, { useEffect } from "react";

import Banner from "../Banner";
import FeaturedListings from "./FeaturedListings";

export default function Home() {
  const $ = window.$;

  useEffect(() => {
    // Update the document title using the browser API
    $(".hero-banner").circleMagic({
      elem: ".hero-banner",
      color: "rgba(255,255,255,.5)",
      radius: 10,
      densety: 0.3,
      clearOffset: 0.2,
    });
    console.log("useEffect");
  });

  return (
    <React.Fragment>
      {/* Hero Banner  Start */}
      <Banner />
      {/* Hero Banner End */}

      <FeaturedListings />
    </React.Fragment>
  );
}

//****************************** CLASS ******************************/
// import React, { PureComponent } from "react";

// import Banner from "../Banner";
// import FeaturedListings from "./FeaturedListings";

// export default class Home extends PureComponent {
//   componentDidMount() {
//     const $ = window.$;
//     // Update the document title using the browser API
//     $(".hero-banner").circleMagic({
//       elem: ".hero-banner",
//       color: "rgba(255,255,255,.5)",
//       radius: 10,
//       densety: 0.3,
//       clearOffset: 0.2,
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {/* Hero Banner  Start */}
//         <Banner />
//         {/* Hero Banner End */}

//         <FeaturedListings />
//       </React.Fragment>
//     );
//   }
// }
