import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import "./Style/Booking.css";
import { fetchAPI } from "../../API";

const times = (state, action) => {
  switch (action.type) {
    case "update_times":
      return {
        ...state,
        availableTimes: updateTimes(action.selectedDate),
      };
    default:
      return state;
  }
};

export function updateTimes(selectedDate) {
  const date = new Date(selectedDate);
  return fetchAPI(date);
}

export function initializeTimes() {
  return {
    availableTimes: fetchAPI(new Date()),
  };
}

function Booking() {
  const [state, dispatch] = useReducer(times, initializeTimes());
  return (
    <div className="container">
      <div className="booking-grid" id="booking">
        <h2>Dining Reservations</h2>
        <div className="booking-forms">
          <div className="booking-left">
            <BookingForm dispatch={dispatch} state={state} />
          </div>
          <div className="booking-right">
            <BookingConfirmation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
