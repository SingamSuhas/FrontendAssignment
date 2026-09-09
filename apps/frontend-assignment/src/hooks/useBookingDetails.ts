import { useBooking } from "./useBooking";

export function useBookingDetails() {
  const {
    bookingData,
    setBookingData,
  } = useBooking();

  const updateBookingDetails = (
    updates: Partial<
      typeof bookingData.bookingDetails
    >
  ) => {
    setBookingData((prev) => ({
      ...prev,
      bookingDetails: {
        ...prev.bookingDetails,
        ...updates,
      },
    }));
  };

  return {
    bookingDetails:
      bookingData.bookingDetails,
    updateBookingDetails,
  };
}