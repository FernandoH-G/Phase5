import React, { Component } from "react";
import "./App.css";
// My Imports start here:
import NavigationBar from "./Components/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}

export default App;
