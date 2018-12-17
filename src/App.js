import React, { Component } from "react";
import "./App.css";
// My Imports start here:
import NavigationBar from "./Components/NavigationBar";
import Jumbo from "./Components/Jumbo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Jumbo />
      </div>
    );
  }
}

export default App;
