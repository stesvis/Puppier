import { Container } from "react-bootstrap";
import HomeSearchForm from "./HomeSearchForm";
import React from "react";

export default function HomeBanner() {
  return (
    // Banner Start
    <div
      className="image-cover hero-banner"
      style={{
        background:
          "url(https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398_960_720.jpg) no-repeat",
      }}
      data-overlay="6"
    >
      <Container>
        <h1 className="big-header-capt">Find Your Best Friend!</h1>

        <HomeSearchForm />

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
      </Container>
    </div>
    // Banner end
  );
}
