import React, { useEffect } from "react";

import Banner from "../Banner";

export default function Home() {
  const $ = window.$;

  useEffect(() => {
    // Update the document title using the browser API
    $(".hero-banner").circleMagic({
      elem: ".hero-banner",
      color: "rgba(255,255,255,.5)",
      radius: 10,
      densety: 0.3,
      clearOffset: 0.2,
    });
  });

  return (
    <React.Fragment>
      {/* Hero Banner  Start */}
      <Banner />
      {/* Hero Banner End */}
    </React.Fragment>
  );
}
