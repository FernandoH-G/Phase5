import React, { Component } from "react";
import Jumbo from "../Components/Jumbo";
import { Container } from "reactstrap";

class About extends Component {
  state = { volunteers: [] };
  componentDidMount() {
    fetch("/users").then(vol => console.log(vol));
  }
  render() {
    let title = "About";
    let message = "Here are our great volunteers";
    return (
      <Container>
        <Jumbo title={title} message={message} />
      </Container>
    );
  }
}

export default About;
