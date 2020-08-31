import { Link } from "react-router-dom";
import React from "react";
import { Row } from "react-bootstrap";

export default function BannerSearchForm() {
  return (
    // <!-- ---------- Search Form -->
    <div className="full-search-2 italian-search hero-search-radius">
      <div className="hero-search-content">
        <Row>
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
                  <option value="1">Dog</option>
                  <option value="2">Cat</option>
                </select>
                <i className="ti-briefcase"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-12 small-padd">
            <div className="form-group">
              <div className="form-group">
                <Link to="#" className="btn search-btn">
                  Search
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
    // ---------- Search Form
  );
}
