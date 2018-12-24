import React, { Component } from "react";
import MainArea from "../Components/MainArea";
import JumboDE from "../Components/JumboDE";

// const { Client } = require("pg"); // This doesn't belong in the front end!

class DistributionEvents extends Component {
  state = { events: [] };
  componentDidMount() {
    fetch("/events");
    //   .then(res => res.json())
    // .catch("I did not fetch anything from /dist_events");
    // .then(events => this.setState({ events }));
  }
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
