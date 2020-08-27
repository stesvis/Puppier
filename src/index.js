// ==============================================================
// All Jquery -->
// ==============================================================

// import "./assets/js/jquery.min.js";
// import "./assets/js/circleMagic.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/rangeslider.js";
// import "./assets/js/select2.min.js";
// import "./assets/js/aos.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/slick.js";
// import "./assets/js/slider-bg.js";
// import "./assets/js/lightbox.js";
// import "./assets/js/imagesloaded.js";
// import "./assets/js/isotope.min.js";
// import "./assets/js/coreNavigation.js";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import "./assets/css/plugins.css";

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
