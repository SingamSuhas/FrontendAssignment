import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Layout from "../layouts/Layout";

import HomePage from "../views/home/HomePage";
import CustomerDetailsPage from "../views/booking/CustomerDetailsPage";
import BookingDetailsPage from "../views/booking/BookingDetailsPage";
import PassengerDetailsPage from "../views/booking/PassengerDetailsPage";
import ReviewSubmitPage from "../views/booking/ReviewSubmitPage";
import PreviousBookingsPage from "../views/booking/PreviousBookings";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/customer-details"
          element={<CustomerDetailsPage />}
        />

        <Route
          path="/booking-details"
          element={<BookingDetailsPage />}
        />

        <Route
          path="/passenger-details"
          element={<PassengerDetailsPage />}
        />

        <Route
          path="/review-submit"
          element={<ReviewSubmitPage />}
        />
        <Route
          path="/previous-bookings"
          element={<PreviousBookingsPage />}
        />
      </Route>
    </Routes>
  );
}