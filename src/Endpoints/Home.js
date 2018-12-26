import React from "react";
import Jumbo from "../Components/Jumbo";

let title = "Benefit Bakersfield Cycling";
let message =
  "Benefit Bakersfield Cycling is dedicated to supplying Bakersfield california residents with free or reduced cyling gear.";
const Home = () => {
  return (
    <div>
      <Jumbo title={title} message={message} />
    </div>
  );
};

export default Home;
