import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import DistributionEvents from "./Endpoints/DistributionEvents";
import About from "./Endpoints/About";
import Home from "./Endpoints/Home";
import NotFound from "./Endpoints/NotFound";
import NavigationBar from "./Components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <main className="content">
          <Switch>
            <Route path="/events" component={DistributionEvents} />
            <Route path="/about" component={About} />
            <Route path="/not_found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not_found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
