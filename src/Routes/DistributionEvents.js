import React, { Component } from "react";
import MainArea from "../Components/MainArea";
import JumboDE from "../Components/JumboDE";
// import {} from "pg";
// var pg = require("pg");
// var exp = require("express");

class DistributionEvents extends Component {
  render() {
    return (
      <div>
        <JumboDE />
        <MainArea />
      </div>
    );
  }
}

export default DistributionEvents;
