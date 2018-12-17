import React from "react";
import { Jumbotron } from "reactstrap";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to the BBC!</h1>
        <p className="lead">
          Benefit Bakersfield Cycling is dedicated to providing all Bakersfield
          residents with supplies, information, and other things to ensure the
          most safe ride!
        </p>
        <hr className="my-2" />
        <p className="lead" />
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
