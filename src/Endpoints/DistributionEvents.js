import React, { Component } from "react";
import MainArea from "../Components/MainArea";
import Jumbo from "../Components/Jumbo";
import { DateRangePicker } from "react-dates";
import { Button } from "reactstrap";
// const { Client } = require("pg"); // This doesn't belong in the front end!

class DistributionEvents extends Component {
  state = { events: [] };
  // componentDidMount() {
  //   fetch("/events").then(events => console.log(events));
  //     .then(res => res.json())
  //   .catch("I did not fetch anything from /dist_events");
  //   .then(events => this.setState({ events }));
  // }
  render() {
    let title = "Distribution Events";
    let message = "At the heart of our organization are distribution events.";
    // Maybe pass down the result of the query as an array to MainArea component.
    return (
      <div>
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
        <Button
          outline
          color="primary"
          onClick={() => {
            let sd = this.state.startDate.format("YYYY-MM-DD");
            let ed = this.state.endDate.format("YYYY-MM-DD");
            console.log("user dates: ", sd, ed);
          }}
        >
          Query date!
        </Button>{" "}
        <MainArea />
      </div>
    );
  }
}

export default DistributionEvents;
