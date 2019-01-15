import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Jumbo extends Component {
  // Make note that you're not saving anything to the state. Nothing is being
  // remembered! You're using props directly as it's being passed down.
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.message}</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
