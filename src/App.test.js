import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  initializeTimes,
  updateTimes,
} from "./components/BookingForms/Booking";
import { fetchAPI } from "./API";
import BookingForm from "./components/BookingForms/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Number of Guests");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes validate the expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

test("updateTimes", () => {
  const selectedDate = new Date("2024-03-10");
  const availableTimes = updateTimes(selectedDate);

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});
