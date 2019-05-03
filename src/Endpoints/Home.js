import React from "react";
import Jumbo from "../Components/Jumbo";
import { Container } from "reactstrap";
let title = "Benefit Bakersfield Cycling";
let message =
  "Benefit Bakersfield Cycling is dedicated to supplying Bakersfield california residents with free or reduced cyling gear.";
const Home = () => {
  return (
    <Container>
      <Jumbo title={title} message={message} />
    </Container>
  );
};

export default Home;
