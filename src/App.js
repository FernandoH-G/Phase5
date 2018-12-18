import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// My Components:
import NavigationBar from "./Components/NavigationBar";
import Jumbo from "./Components/Jumbo";
// My Routes:
import DistributionEvents from "./Routes/DistributionEvents";
import About from "./Routes/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Jumbo />
          <Switch>
            {/* <Route path="./" component={App} /> */}
            <Route path="/distributionevents" component={DistributionEvents} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
