import React, { Component } from "react";
import Calendar from "./Calendar";
import ReservationService from "../Reservation/Services/ReservationService";

class CalenderPage extends Component {
  state = { reservations: [] };

  async componentDidMount() {
    const reservations = await ReservationService.getReservations();
    this.setState({ reservations });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Calendar's</h1>
        <Calendar {...this.state}></Calendar>
      </div>
    );
  }
}

export default CalenderPage;
