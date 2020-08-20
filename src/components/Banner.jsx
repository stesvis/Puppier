import React from "react";

export default function Banner() {
  return (
    <div
      className="image-cover hero-banner"
      style={{
        background:
          // eslint-disable-next-line no-useless-concat
          "url(" + "https://via.placeholder.com/1920x1000" + ") no-repeat",
      }}
      data-overlay="6"
    >
      <div className="container">
        <h1 className="big-header-capt">Your Dream Directory</h1>
        <div className="full-search-2 italian-search hero-search-radius">
          <div className="hero-search-content">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 small-padd">
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder="Keywords..."
                    />
                    <i className="ti-search"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder="Location..."
                    />
                    <i className="ti-target"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 small-padd">
                <div className="form-group">
                  <div className="input-with-icon">
                    <select id="list-category" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">Spa & Bars</option>
                      <option value="2">Restaurants</option>
                      <option value="3">Hotels</option>
                      <option value="4">Educations</option>
                      <option value="5">Business</option>
                      <option value="6">Retail & Shops</option>
                      <option value="7">Garage & Services</option>
                    </select>
                    <i className="ti-briefcase"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-12 small-padd">
                <div className="form-group">
                  <div className="form-group">
                    <a href="#" className="btn search-btn">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-cat-list">
          <ul>
            <li>
              <a href="grid-with-sidebar.html">Hotel & Spa</a>
            </li>
            <li>
              <a href="grid-with-sidebar.html">Education</a>
            </li>
            <li>
              <a href="grid-with-sidebar.html">Shopping</a>
            </li>
            <li>
              <a href="grid-with-sidebar.html">Restaurants</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
