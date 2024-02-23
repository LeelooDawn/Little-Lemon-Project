import React from "react";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import "./Style/Booking.css";

function Booking() {
  return (
    <div className="container">
      <div className="booking-grid" id="booking">
        <h2>Dining Reservations</h2>
        <div className="booking-forms">
          <div className="booking-left">
            <BookingForm />
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
