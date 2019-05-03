import React, { Component } from "react";
import Jumbo from "../Components/Jumbo";
import { DateRangePicker } from "react-dates";
import { Button, Container, Row, Col } from "reactstrap";
import MyCard from "../Components/MyCard";
// const { Client } = require("pg"); // This doesn't belong in the front end!

class DistributionEvents extends Component {
  state = { events: [] };

  fetchDateRange = () => {
    let sd = this.state.startDate.format("YYYY-MM-DD");
    let ed = this.state.endDate.format("YYYY-MM-DD");
    // console.log("user dates: ", sd, ed);
    fetch("/events", {
      method: "post",
      headers: {
        "Content-Type": "application/json" //THIS SHIT HAS TO BE VERBATIM!
      },
      body: JSON.stringify({
        sdate: sd,
        edate: ed
      })
    })
      .then(data => data.json())
      .then(events => {
        let mappedEvents = events.map(eve => {
          let address = `${eve.Street} ${eve.City} ${eve.State} 
          ${eve.ZipCode} `;
          return (
            <Col sm="3" key={eve.DistributionEventID}>
              <MyCard
                id={eve.AddressID}
                name={eve.Name}
                date={eve.Date}
                location={address}
              />
            </Col>
          );
        });
        this.setState({ events: mappedEvents });
        // console.log("Mapped type info:", this.state.events);
      });
  };

  render() {
    let title = "Distribution Events";
    let message = "At the heart of our organization are distribution events.";
    return (
      <Container>
        <Jumbo title={title} message={message} />
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="user_startdate" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="user_enddate" // PropTypes.string.isRequired,
          onDatesChange={
            ({ startDate, endDate }) => this.setState({ startDate, endDate })
            // These states get auto. created.
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Button outline color="primary" onClick={this.fetchDateRange}>
          Query date!
        </Button>{" "}
        <Row>{this.state.events}</Row>
      </Container>
    );
  }
}

export default DistributionEvents;
