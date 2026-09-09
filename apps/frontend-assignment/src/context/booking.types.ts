export interface CustomerDetails {
  travelType: string;
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  gender: string;
  nationality: string;
  age: string;
}

export interface BookingDetails {
  origin: string;
  destination: string;
  departureDate: string;
  numberOfPassengers: number;
  language: string;
  travelClass: string;
}

export interface Passenger {
  id: string;
  name: string;
  guardianName: string;
  passengerType: string;
  gender: string;
  age: string;
  seatPreference: string;
  passportNumber: string;
}

export interface BookingState {
  customerDetails: CustomerDetails;
  bookingDetails: BookingDetails;
  passengers: Passenger[];
}