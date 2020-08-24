import React, { PureComponent } from "react";

import ListingCard from "../ListingCard";

export default class FeaturedListings extends PureComponent {
  state = {
    listings: [],
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    // fetch featured listings from API
    const featuredListings = this.fetchData();

    this.setState({ listings: featuredListings });
  }

  fetchData() {
    const featuredListings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return featuredListings;
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="sec-heading center">
                <h2>Most Popular Listings</h2>
                <p>Find new & featured listings for you.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="owl-carousel owl-theme" id="lists-slide">
              {/* Single listings */}
              {this.state.listings.map((listing) => (
                <ListingCard key={listing} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//****************************** FUNCTION ******************************/

// import React, { memo, useEffect, useState } from "react";

// import ListingCard from "../ListingCard";

// function FeaturedListings() {
//   const [listings, setListings] = useState([]);

//   // Simulates componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // fetch featured listings from API
//     const featuredListings = fetchData();
//     setListings(featuredListings);
//   }, []);

//   function fetchData() {
//     const featuredListings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     return featuredListings;
//   }

//   return (
//     <section>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-md-12">
//             <div className="sec-heading center">
//               <h2>Most Popular Listings</h2>
//               <p>Find new & featured listings for you.</p>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="owl-carousel owl-theme" id="lists-slide">
//             {/* Single listings */}
//             {listings.map((listing) => (
//               <ListingCard key={listing} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default memo(FeaturedListings);
