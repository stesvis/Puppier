// import React, { PureComponent } from "react";

// import ListingCard from "../listings/ListingCard";

// export default class FeaturedListings extends PureComponent {
//   constructor(props) {
//     console.log("FeaturedListings props", props);
//     super(props);
//   }

//   render() {
//     console.log("FeaturedListings -> render()");
//     return (
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 col-md-12">
//               <div className="sec-heading center">
//                 <h2>Most Popular Listings</h2>
//                 <p>Find new & featured listings for you.</p>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="owl-carousel owl-theme" id="lists-slide">
//               {/* Single listings */}
//               {this.props.listings.map((listing) => (
//                 <ListingCard key={listing.id} listing={listing} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

//****************************** FUNCTION ******************************/

import React, { memo } from "react";

import ListingCard from "../listings/ListingCard";

const FeaturedListings = memo(function FeaturedListings(props) {
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
            {props.listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturedListings;
