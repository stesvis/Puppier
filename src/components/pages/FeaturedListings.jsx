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

import "react-multi-carousel/lib/styles.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { memo } from "react";

import Carousel from "react-multi-carousel";
import ListingCard from "../listings/ListingCard";

const FeaturedListings = memo(function FeaturedListings(props) {
  const { listings } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12">
            <div className="sec-heading center">
              <h2>Most Popular Listings</h2>
              <p>Find new & featured listings for you.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              showDots
              autoPlay
              infinite
              autoPlaySpeed={3000}
            >
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default FeaturedListings;
