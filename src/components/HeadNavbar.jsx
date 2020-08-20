import React, { Component } from "react";

export default function HeadNavbar() {
  return (
    // <!-- Start Navigation -->
    <div className="header header-dark-transparent">
      <nav className="headnavbar">
        <div className="nav-header">
          <a href="#" className="brand normal-logo">
            <img src="assets/img/g-logo-light.png" alt="" />
          </a>
          <a href="#" className="brand brand-overlay">
            <img src="assets/img/g-logo.png" alt="" />
          </a>
          <button className="toggle-bar">
            <span className="ti-align-justify"></span>
          </button>
        </div>
        <ul className="menu">
          <li className="dropdown">
            <a href="#" className="active">
              Home
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a href="#">Standard Style</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="index.html">Home Style 1</a>
                  </li>
                  <li>
                    <a href="home-3.html">Home Style 2</a>
                  </li>
                  <li>
                    <a href="home-4.html" className="active">
                      Home Style 3
                    </a>
                  </li>
                  <li>
                    <a href="home-5.html">Home Style 4</a>
                  </li>
                  <li>
                    <a href="home-6.html">Home Style 5</a>
                  </li>
                  <li>
                    <a href="home-7.html">Home Style 6</a>
                  </li>
                  <li>
                    <a href="home-8.html">Home Style 7</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Air BNB Style</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="home-2.html">Home Style 1</a>
                  </li>
                  <li>
                    <a href="home-9.html">Home Style 2</a>
                  </li>
                  <li>
                    <a href="home-10.html">Home Style 3</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Map Style</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="map.html">Map Style</a>
                  </li>
                  <li>
                    <a href="half-map-with-grid2-layout.html">Half map Style</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">Explore</a>
            <ul className="dropdown-menu lg-wt">
              <li>
                <a href="hotels.html">
                  <div className="mg-menu-items">
                    <i className="lni-apartment"></i>
                    <h5>
                      Find Hotels<span>Search Your Hotels</span>
                    </h5>
                  </div>
                </a>
              </li>

              <li>
                <a href="adventures.html">
                  <div className="mg-menu-items">
                    <i className="lni-coffee-cup"></i>
                    <h5>
                      Find Adventures<span>Discover Adventures</span>
                    </h5>
                  </div>
                </a>
              </li>

              <li>
                <a href="restaurants.html">
                  <div className="mg-menu-items">
                    <i className="lni-restaurant"></i>
                    <h5>
                      Find Restaurants<span>Nearest Restaurants</span>
                    </h5>
                  </div>
                </a>
              </li>

              <li>
                <a href="booking.html">
                  <div className="mg-menu-items">
                    <i className="lni-burger"></i>
                    <h5>
                      Booking Page<span>See Your Booking Page</span>
                    </h5>
                  </div>
                </a>
              </li>

              <li>
                <a href="dashboard.html">
                  <div className="mg-menu-items">
                    <i className="lni-dashboard"></i>
                    <h5>
                      User Dashboard<span>Checkout Your Profile Page</span>
                    </h5>
                  </div>
                </a>
              </li>

              <li>
                <a href="add-listing.html">
                  <div className="mg-menu-items">
                    <i className="lni-plus"></i>
                    <h5>
                      Submit Listing<span>Submit Your Listings</span>
                    </h5>
                  </div>
                </a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">Listings</a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a href="#">List Layouts</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="list-layout-with-sidebar.html">With Sadebar</a>
                  </li>
                  <li>
                    <a href="list-layout-full-width.html">Full Width</a>
                  </li>
                  <li>
                    <a href="list-layout-with-map.html">With Map</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Grid Layouts</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="grid-with-sidebar.html">With Sidebar</a>
                  </li>
                  <li>
                    <a href="grid-full-width.html">With Full Width</a>
                  </li>
                  <li>
                    <a href="grid-with-map.html">With Map</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Half Map Screen</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="half-map-with-list-layout.html">
                      With List Layout
                    </a>
                  </li>
                  <li>
                    <a href="half-map-with-grid-layout.html">
                      With Grid Layout
                    </a>
                  </li>
                  <li>
                    <a href="half-map-with-grid2-layout.html">
                      With Grid Layout 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Single Listing</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="single-property-1.html">Single Listing 1</a>
                  </li>
                  <li>
                    <a href="single-property-2.html">Single Listing 2</a>
                  </li>
                  <li>
                    <a href="single-property-3.html">Single Listing 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="megamenu" data-width="500">
            <a href="#">Pages</a>
            <div className="megamenu-content">
              <div className="mg-menu">
                <ul>
                  <li>
                    <a href="blog.html">
                      <div className="mg-menu-items">
                        <i className="ti-layout-grid2"></i>
                        <h5>
                          Blog Page<span>Checkout Our Articles</span>
                        </h5>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="blog-detail.html">
                      <div className="mg-menu-items">
                        <i className="ti-layout"></i>
                        <h5>
                          Blog Detail<span>Detail Blog Page Design</span>
                        </h5>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="pricing.html">
                      <div className="mg-menu-items">
                        <i className="ti-credit-card"></i>
                        <h5>
                          Pricing Page<span>Our Latest Offers & Package</span>
                        </h5>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="contact.html">
                      <div className="mg-menu-items">
                        <i className="ti-location-pin"></i>
                        <h5>
                          Contact Us<span>Need Help? Get In Touch</span>
                        </h5>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="component.html">
                      <div className="mg-menu-items">
                        <i className="ti-ruler-pencil"></i>
                        <h5>
                          Component<span>List of All Components</span>
                        </h5>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="404.html">
                      <div className="mg-menu-items">
                        <i className="ti-face-sad"></i>
                        <h5>
                          Error Page<span>Error Page Design</span>
                        </h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="#" data-toggle="modal" data-target="#signup">
              Sign Up
            </a>
          </li>
        </ul>

        <ul className="attributes">
          <li className="login-attri">
            <a href="#" data-toggle="modal" data-target="#login">
              Log In
            </a>
          </li>
        </ul>
      </nav>
    </div>
    // <!-- End Navigation -->
  );
}
