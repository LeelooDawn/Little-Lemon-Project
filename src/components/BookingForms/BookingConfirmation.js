import React from "react";
import "./Style/Confirmation.css";

function BookingConfirmation({ state }) {
  return (
    <div className="container">
      <div className="confirmation-grid">
        <div className="confirmation">
          <h3>Booking Confirmed</h3>
          <p>Date: {state.res_date}</p>
          <p>Time: {state.res_time}</p>
          <p>Number of Guests: {state.guests}</p>
          <p>Special occasion: {state.occasion}</p>
        </div>
        <div className="cancellation">
          Please cancel 12 hours before reservation time. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
