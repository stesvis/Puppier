import { Container } from "react-bootstrap";
import HomeSearchForm from "./HomeSearchForm";
import { Link } from "react-router-dom";
import React from "react";
import { Routes } from "../../../services/api/routes";
import { useEffect } from "react";
import { useState } from "react";

export default function HomeBanner(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  return (
    // Banner Start
    <div
      className="image-cover hero-banner"
      style={{
        background:
          "url(https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398_960_720.jpg) no-repeat",
      }}
      data-overlay="6">
      <Container>
        <h1 className="big-header-capt">Find Your Best Friend!</h1>

        <HomeSearchForm categories={categories} />

        <div className="popular-cat-list">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`${Routes.listings}?categoryId=${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
    // Banner end
  );
}
