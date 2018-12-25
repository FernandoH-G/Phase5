import React, { Component } from "react";

class About extends Component {
  state = { volunteers: [] };
  componentDidMount() {
    fetch("/users").then(vol => console.log(vol));
  }
  render() {
    return <div>I'm in About</div>;
  }
}

export default About;
