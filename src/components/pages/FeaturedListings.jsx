import React, { PureComponent } from "react";

import ListingCard from "../ListingCard";

export default class FeaturedListings extends PureComponent {
  state = {
    listings: [],
  };

  componentDidMount() {
    // fetch featured listings from API
    this.setState({ listings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
    console.log("ComponentDidMount");
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

// import React, { useEffect, useState } from "react";

// import ListingCard from "../ListingCard";

// export default function FeaturedListings() {
//   // const featuredListings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   // const listItems = featuredListings.map(() => <ListingCard />);
//   const [featuredListings, setFeaturedListings] = useState([]);
//   const [listItems, setListItems] = useState(null);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // fetch featured listings from API
//     // const featuredListings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     setFeaturedListings([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     console.log("featuredListings", featuredListings);
//     setListItems(
//       featuredListings.map((listing) => <ListingCard key={listing} />)
//     );

//     return () => listItems;
//   }, [featuredListings, listItems]);

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
//             {listItems}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
