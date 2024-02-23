import React from "react";
import "./Style/Confirmation.css";

function BookingConfirmation() {
  return (
    <div className="container">
      <div className="confirmation-grid">
        <div className="confirmation">
          <h3>Persons Name</h3>
          <p>Date</p>
          <p>time</p>
          <p>number of guests</p>
          <p>special occasion</p>
        </div>
        <div className="cancellation">
          Please cancel 12 hours before reservation time. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
