import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class MyCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.location}</CardTitle>
            <CardSubtitle>Distribution Event Location</CardSubtitle>
            <CardText>
              This event seeks to supply those less fortunate with equipment for
              safe bike riding.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyCard;
