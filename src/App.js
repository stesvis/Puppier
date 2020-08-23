import "./App.css";

import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import LogIn from "./components/modals/LogIn";
import NavBar from "./components/NavBar";

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const openModal = (modalId) => {
    console.log(modalId);
    switch (modalId) {
      case "login":
        setIsLoginVisible(true);
        break;

      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div id="main-wrapper">
        <NavBar />
        <div className="clearfix"></div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>

        <LogIn isVisible={isLoginVisible} />
      </div>
    </React.Fragment>
  );
}

export default App;
