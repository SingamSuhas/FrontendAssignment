import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Divider,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Link,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import BookingLayout from "../../components/booking/BookingLayout";
import FooterActions from "../../components/booking/FooterActions";

import { useBooking } from "../../hooks/useBooking";

export default function ReviewSubmitPage() {
  const navigate = useNavigate();

  const { bookingData } = useBooking();

  const [openSuccessModal, setOpenSuccessModal] =
    useState(false);

  const handleSubmit = () => {
    console.log("Booking Payload");
    console.log(bookingData);

    // Create booking object with metadata
    const completedBooking = {
      bookingId: `BK-${Date.now()}`,
      bookedAt: new Date().toISOString(),
      status: "Confirmed",
      ...bookingData,
    };

    // Get existing bookings
    const existingBookings = JSON.parse(
      localStorage.getItem("previousBookings") || "[]"
    );

    // Store new booking
    localStorage.setItem(
      "previousBookings",
      JSON.stringify([
        ...existingBookings,
        completedBooking,
      ])
    );

    // Show success popup
    setOpenSuccessModal(true);
  };

  const handleCloseModal = () => {
    setOpenSuccessModal(false);
  };

  const handleGoHome = () => {
    setOpenSuccessModal(false);
    navigate("/");
  };

  return (
    <BookingLayout currentStep={4}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Review
      </Typography>

      <Typography
        color="text.secondary"
        mb={5}
      >
        Double-check your selections and
        confirm your booking.
      </Typography>

      <Typography
        variant="h6"
        fontWeight={600}
        mb={3}
      >
        Customer Details
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Travel Type
          </Typography>
          <Typography>
            {
              bookingData.customerDetails
                .travelType
            }
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Name
          </Typography>
          <Typography>
            {bookingData.customerDetails.name}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Email
          </Typography>
          <Typography>
            {bookingData.customerDetails.email}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Gender
          </Typography>
          <Typography>
            {bookingData.customerDetails.gender}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Nationality
          </Typography>
          <Typography>
            {
              bookingData.customerDetails
                .nationality
            }
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Age
          </Typography>
          <Typography>
            {bookingData.customerDetails.age}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Typography
        variant="h6"
        fontWeight={600}
        mb={3}
      >
        Booking Details
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Origin
          </Typography>
          <Typography>
            {bookingData.bookingDetails.origin}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Destination
          </Typography>
          <Typography>
            {
              bookingData.bookingDetails
                .destination
            }
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Departure Date
          </Typography>
          <Typography>
            {
              bookingData.bookingDetails
                .departureDate
            }
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            No. Of Passengers
          </Typography>
          <Typography>
            {
              bookingData.bookingDetails
                .numberOfPassengers
            }
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography color="text.secondary">
            Travel Class
          </Typography>
          <Typography>
            {
              bookingData.bookingDetails
                .travelClass
            }
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Typography
        variant="h6"
        fontWeight={600}
        mb={3}
      >
        Passenger Details
      </Typography>

      {bookingData.passengers.map(
        (passenger, index) => (
          <Box
            key={passenger.id}
            mb={5}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              mb={2}
            >
              Passenger {index + 1}
            </Typography>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Name
                </Typography>
                <Typography>
                  {passenger.name}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Passenger Type
                </Typography>
                <Typography>
                  {
                    passenger.passengerType
                  }
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Age
                </Typography>
                <Typography>
                  {passenger.age}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Gender
                </Typography>
                <Typography>
                  {passenger.gender}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Seat Preference
                </Typography>
                <Typography>
                  {
                    passenger.seatPreference
                  }
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography color="text.secondary">
                  Passport Number
                </Typography>
                <Typography>
                  {
                    passenger.passportNumber
                  }
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )
      )}

      <FooterActions
        submit
        showBack
        onBack={() =>
          navigate("/passenger-details")
        }
        onNext={handleSubmit}
        onCancel={() => navigate("/")}
      />

      {/* Success Popup */}
      <Dialog
        open={openSuccessModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor:
                "rgba(0,0,0,0.75)",
              backdropFilter: "blur(2px)",
            },
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: 4,
            width: 520,
            textAlign: "center",
            overflow: "visible",
            p: 2,
          },
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: "#9CA3AF",
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ py: 5 }}>
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              bgcolor: "#DCFCE7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                color: "#16A34A",
                fontSize: 32,
              }}
            />
          </Box>

          <Typography
            variant="h4"
            fontWeight={700}
            mb={2}
          >
            Your flight is booked!
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 350,
              mx: "auto",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Check your trip under
            "Previous Bookings".
            <br />
            Have a pleasant journey!
          </Typography>

          <Link
            component="button"
            underline="always"
            onClick={handleGoHome}
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Go Back to Home
          </Link>
        </DialogContent>
      </Dialog>
    </BookingLayout>
  );
}
