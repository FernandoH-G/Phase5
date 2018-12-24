import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import DistributionEvents from "./Components/DistributionEvents";
import About from "./Components/About";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import NavigationBar from "./Components/NavigationBar";

class App extends Component {
  state = { users: [] };
  componentDidMount() {
    // fetch("/users")
    //   // Then takes in the resolved promise and uses it in res
    // .then(res => res.json())
    // .then(res => console.log("My res:", res));
    // .then(newres => console.log("My res.json result: ", newres));
    //   // Then it takes the result of the previous .then to be saved into comp. state.
    // .then(users => this.setState({ users }));
  }
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <main className="content">
          <Switch>
            {/* Why does path="/dist-events" redirect to not_found?! */}
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
