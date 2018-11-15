import React, { Component } from "react";

class DisplayDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      day: new Date().getDay(),
      dayWord: "",
      displayDate: ""
    };
  }

  currentDate() {
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth();
    let date = this.state.date.getDate();
    let day = this.state.date.getDay();
    let monthName = monthNames[month];

    this.setState({
      displayDate: monthName + " " + date + ", " + year,
      dayWord: weekDay[day]
    });
  }

  currentTime() {
    this.setState({
      date: new Date()
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
    this.currentDate();
  }

  render() {
    return (
      <React.Fragment>
        <h5 className="head-date">
          {this.state.dayWord} | {this.state.displayDate}
        </h5>
        <h4 className="head-time">{this.state.date.toLocaleTimeString()}</h4>
      </React.Fragment>
    );
  }
}

export default DisplayDate;
