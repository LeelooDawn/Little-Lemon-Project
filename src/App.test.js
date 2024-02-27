import { render, screen } from "@testing-library/react";
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

describe("BookingForm", () => {
  test("Renders the Date", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput.getAttribute("type")).toBe("date");
  });

  test("Renders the Time", () => {
    render(<BookingForm />);
    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toBeInTheDocument();
    expect(timeInput.getAttribute("id")).toBe("res-time");
  });

  test("Renders the GUESTS", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of Guests");
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput.getAttribute("type")).toBe("number");
    expect(guestsInput.getAttribute("min")).toBe("1");
    expect(guestsInput.getAttribute("max")).toBe("10");
  });

  test("Renders the Occasion", () => {
    render(<BookingForm />);
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput.getAttribute("id")).toBe("occasion");
  });
});
