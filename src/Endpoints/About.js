import React, { Component } from "react";
import Jumbo from "../Components/Jumbo";

class About extends Component {
  state = { volunteers: [] };
  componentDidMount() {
    fetch("/users").then(vol => console.log(vol));
  }
  render() {
    let title = "About";
    let message = "Here are our great volunteers";
    return (
      <div>
        <Jumbo title={title} message={message} />
      </div>
    );
  }
}

export default About;
