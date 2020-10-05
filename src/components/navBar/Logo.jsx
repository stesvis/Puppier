import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Logo(props) {
  const location = useLocation();

  return location.pathname === "/" ? (
    <>
      <Link to="/" className="brand normal-logo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/y-logo-light.png`}
          alt=""
        />
      </Link>
      <Link to="/" className="brand brand-overlay">
        <img src={`${process.env.PUBLIC_URL}/assets/img/y-logo.png`} alt="" />
      </Link>
    </>
  ) : (
    <Link to="/" className="brand">
      <img src={`${process.env.PUBLIC_URL}/assets/img/y-logo.png`} alt="" />
    </Link>
  );
}
