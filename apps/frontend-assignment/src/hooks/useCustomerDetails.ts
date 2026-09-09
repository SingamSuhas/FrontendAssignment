import { useBooking } from "./useBooking";

export function useCustomerDetails() {
  const {
    bookingData,
    setBookingData,
  } = useBooking();

  const updateCustomerDetails = (
    updates: Partial<
      typeof bookingData.customerDetails
    >
  ) => {
    setBookingData((prev) => ({
      ...prev,
      customerDetails: {
        ...prev.customerDetails,
        ...updates,
      },
    }));
  };

  return {
    customerDetails:
      bookingData.customerDetails,
    updateCustomerDetails,
  };
}