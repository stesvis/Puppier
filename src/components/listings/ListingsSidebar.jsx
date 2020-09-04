import React from "react";

export default function ListingsSidebar() {
  return (
    <div className="exlip-page-sidebar">
      <div className="sidebar-widgets">
        <div className="form-group">
          <div className="input-with-icon">
            <input type="text" className="form-control" placeholder="Keyword" />
            <i className="ti-search"></i>
          </div>
        </div>

        <div className="form-group">
          <div className="input-with-icon">
            <input type="text" className="form-control" placeholder="Where" />
            <i className="ti-target"></i>
          </div>
        </div>

        <div className="form-group">
          <div className="input-with-icon">
            <select id="list-category" className="form-control">
              <option value="">&nbsp;</option>
              <option value="1">Dogs</option>
              <option value="2">Cats</option>
            </select>
            <i className="ti-briefcase"></i>
          </div>
        </div>
        <div className="range-slider">
          <label>Radius</label>
          <div
            data-min="0"
            data-max="100"
            data-min-name="min_price"
            data-max-name="min_price"
            data-unit="Miles"
            className="range-slider-ui ui-slider"
            aria-disabled="false"
          ></div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}
