import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
// My images
import BC from "./../Images/BC.jpeg";
import CSUB from "./../Images/csub.jpeg";
import BB from "./../Images/bike_bakersfield.jpeg";
import MS from "./../Images/mercy_southwest.jpeg";
import BH from "./../Images/bakersfield_homeless.jpeg";

const moment = require("moment");

class MyCard extends Component {
  // CHANGE THIS COMPONENT TO STATELESS FUNCTION!!!
  selectPic = () => {
    let img;
    switch (this.props.id) {
      case 14:
        img = BH;
        break;
      case 15:
        img = BB;
        break;
      case 16:
        img = MS;
        break;
      case 17:
        img = CSUB;
        break;
      case 18:
        img = BC;
        break;
      default:
        img = CSUB;
    }
    return img;
  };
  render() {
    return (
      <div>
        <Card className="text-center">
          <CardImg
            top
            width="100%"
            src={this.selectPic()}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <strong>{this.props.name}</strong>
            </CardTitle>
            <CardSubtitle>
              <em>
                <strong>Date: </strong>
              </em>
              {moment(this.props.date).format("MM/DD/YYYY")}
            </CardSubtitle>
            <CardText>
              <em>
                <strong>Address: </strong>
              </em>
              <br />
              {this.props.location}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyCard;
