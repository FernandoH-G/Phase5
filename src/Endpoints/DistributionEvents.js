import React, { Component } from "react";
import MainArea from "../Components/MainArea";
import Jumbo from "../Components/Jumbo";

// const { Client } = require("pg"); // This doesn't belong in the front end!

class DistributionEvents extends Component {
  state = { events: [] };
  componentDidMount() {
    fetch("/events").then(events => console.log(events));
    //   .then(res => res.json())
    // .catch("I did not fetch anything from /dist_events");
    // .then(events => this.setState({ events }));
  }
  render() {
    let title = "Distribution Events";
    let message = "At the heart of our organizations are distribution events.";
    return (
      <div>
        <Jumbo title={title} message={message} />
        <MainArea />
      </div>
    );
  }
}

export default DistributionEvents;
