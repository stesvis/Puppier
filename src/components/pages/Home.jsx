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

import Banner from "../Banner";
import FeaturedListings from "./FeaturedListings";

export default class Home extends Component {
  state = {
    featuredListings: [],
  };

  fetchData() {
    console.log("Home -> fetchData()");
    // fetch FeaturedListings API
    const featuredListings = {
      data: [
        {
          id: 1,
          image: "https://picsum.photos/id/1025/1200/850",
          price: "$1,500",
          reviewsCount: 15,
          title: "Cute pug puppy!",
          category: {
            id: 1,
            name: "Dog",
          },
          author: {
            id: 1,
            avatarImage: "https://picsum.photos/400/400",
          },
        },
        {
          id: 2,
          image: "https://picsum.photos/id/237/1200/850",
          price: "$250",
          reviewsCount: 3,
          title: "Just a mutt",
          category: {
            id: 1,
            name: "Dog",
          },
          author: {
            id: 2,
            avatarImage: "https://picsum.photos/400/400",
          },
        },
        {
          id: 3,
          image: "https://picsum.photos/id/1074/1200/850",
          price: "Free",
          reviewsCount: 0,
          title: "Lovely tubby",
          category: {
            id: 2,
            name: "Cat",
          },
          author: {
            id: 3,
            avatarImage: "https://picsum.photos/400/400",
          },
        },
        {
          id: 4,
          image: "https://picsum.photos/id/219/1200/850",
          price: "$50",
          reviewsCount: 3,
          title: "Siamese cat",
          category: {
            id: 2,
            name: "Cat",
          },
          author: {
            id: 4,
            avatarImage: "https://picsum.photos/400/400",
          },
        },
      ],
    };
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
        <Banner />
        {/* Hero Banner End */}

        <FeaturedListings listings={this.state.featuredListings} />
      </React.Fragment>
    );
  }
}
