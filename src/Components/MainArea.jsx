import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MyCard from "./MyCard";

class MainArea extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <MyCard />
          </Col>
          <Col>
            <MyCard />
          </Col>
          <Col>
            <MyCard />
          </Col>
          <Col>
            <MyCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainArea;
