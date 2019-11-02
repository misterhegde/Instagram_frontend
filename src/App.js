import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Landingpage from "./components/LandingPage";
import InstaAuth from "./components/InstaAuth";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/instaauth" component={InstaAuth} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
