import React, { useEffect, useState } from "react";

import Banner from "./Banner";
import HeadNavbar from "./HeadNavbar";

export default function Home() {
  useEffect(() => {
    const $ = window.$;

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
      {/* 
        <!-- ============================================================== -->
        <!-- Top header  Start-->
        <!-- ============================================================== -->
      */}
      <HeadNavbar />
      <div className="clearfix"></div>
      {/* 
        <!-- ============================================================== -->
        <!-- Top header  End -->
        <!-- ============================================================== --> 
        */}

      {/* <!-- ============================ Hero Banner  Start================================== --> */}
      <Banner />
      {/* <!-- ============================ Hero Banner End ================================== --> */}
    </React.Fragment>
    //     <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Puppier.ca</h2>
    //     </header>
    //   </div>
  );
}
