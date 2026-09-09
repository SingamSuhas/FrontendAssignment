import { Passenger } from "../context/booking.types";
import { useBooking } from "./useBooking";

export function usePassengers() {
  const {
    bookingData,
    setBookingData,
  } = useBooking();

  const addPassenger = (
    passenger: Passenger
  ) => {
    setBookingData((prev) => ({
      ...prev,
      passengers: [
        ...prev.passengers,
        passenger,
      ],
    }));
  };

const updatePassenger = (
  id: string,
  updates: Partial<Passenger>
) => {
  setBookingData((prev) => ({
    ...prev,
    passengers: prev.passengers.map(
      (passenger) =>
        passenger.id === id
          ? {
              ...passenger,
              ...updates,
            }
          : passenger
    ),
  }));
};

  const removePassenger = (
    id: string
  ) => {
    setBookingData((prev) => ({
      ...prev,
      passengers:
        prev.passengers.filter(
          (passenger) =>
            passenger.id !== id
        ),
    }));
  };

  return {
    passengers: bookingData.passengers,
    addPassenger,
    updatePassenger,
    removePassenger,
  };
}