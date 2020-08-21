import BannerSearchForm from "./BannerSearchForm";
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
        <h1 className="big-header-capt">Find Your Best Friend!</h1>
        <BannerSearchForm />
        <div className="popular-cat-list">
          <ul>
            <li>
              <a href="grid-with-sidebar.html">Dogs</a>
            </li>
            <li>
              <a href="grid-with-sidebar.html">Cats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
