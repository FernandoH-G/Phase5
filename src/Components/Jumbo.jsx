import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: this.props.title,
      message: this.props.message
    };
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.state.title}</h1>
          <p className="lead">{this.state.message}</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
