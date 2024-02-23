import React from "react";
import { useState } from "react";
import "./Style/Bookingform.css";

function BookingForm() {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      res_date: reservationDate,
      res_time: reservationTime,
      res_guests: numberOfGuests,
      res_occasion: occasion,
    };
  };

  function handleDateChange(e) {
    setReservationDate(e.target.value);
  }

  const handleGuests = (e) => {
    const value = e.target.value;
    setNumberOfGuests(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={handleDateChange}
        aria-label="Enter Reservation Date"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => {
          setReservationTime(e.target.value);
        }}
        aria-label="Select time HH:MM"
      >
        {state?.availableTimes?.map((time) => (
          <option key={time} value={time} aria-label={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuests}
        aria-label="Enter Number of Guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        aria-label="Select an Occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        className="submit-button"
        style={
          !reservationDate
            ? { backgroundColor: "#d9d9d9" }
            : { backgroundColor: "#f4ce14" }
        }
        value="Make Your reservation"
        disabled={!reservationDate}
        aria-label="Submit your reservation"
      />
    </form>
  );
}

export default BookingForm;
