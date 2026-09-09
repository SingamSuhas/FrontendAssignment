import {
  createContext,
  ReactNode,
  useState,
} from "react";

import {
  BookingState,
} from "./booking.types";

interface BookingContextType {
  bookingData: BookingState;
  setBookingData: React.Dispatch<
    React.SetStateAction<BookingState>
  >;
}

export const BookingContext =
  createContext<BookingContextType | null>(
    null
  );

export function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookingData, setBookingData] =
    useState<BookingState>({
      customerDetails: {
        travelType: "",
        name: "",
        email: "",
        phoneCode: "+91",
        phoneNumber: "",
        gender: "",
        nationality: "",
        age: "",
      },

      bookingDetails: {
        origin: "",
        destination: "",
        departureDate: "",
        numberOfPassengers: 1,
        language: "",
        travelClass: "",
      },

      passengers: [],
    });

  return (
    <BookingContext.Provider
      value={{
        bookingData,
        setBookingData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}