import { useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useNavigate } from "react-router-dom";

export default function PreviousBookingsPage() {
  const navigate = useNavigate();

  const bookings = useMemo(() => {
    return JSON.parse(
      localStorage.getItem("previousBookings") || "[]"
    );
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 1400,
        mx: "auto",
        px: 4,
        py: 5,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Previous Bookings
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/")}
        >
          New Booking
        </Button>
      </Box>

      {bookings.length === 0 ? (
        <Card
          sx={{
            textAlign: "center",
            py: 6,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              No Bookings Found
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Your completed bookings will
              appear here.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {bookings
            .slice()
            .reverse()
            .map((booking: any) => (
              <Grid
                key={booking.bookingId}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 4,
                }}
              >
                <Card
                  elevation={4}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <FlightTakeoffIcon
                          color="primary"
                        />

                        <Typography
                          fontWeight={700}
                        >
                          Flight Booking
                        </Typography>
                      </Box>

                      <Chip
                        label={
                          booking.status
                        }
                        color="success"
                        size="small"
                      />
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Booking ID
                    </Typography>

                    <Typography
                      fontWeight={600}
                      mb={2}
                    >
                      {booking.bookingId}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Passenger
                    </Typography>

                    <Typography mb={2}>
                      {
                        booking
                          .customerDetails
                          ?.name
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Route
                    </Typography>

                    <Typography mb={2}>
                      {
                        booking
                          .bookingDetails
                          ?.origin
                      }{" "}
                      →{" "}
                      {
                        booking
                          .bookingDetails
                          ?.destination
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Departure Date
                    </Typography>

                    <Typography mb={2}>
                      {
                        booking
                          .bookingDetails
                          ?.departureDate
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Travel Class
                    </Typography>

                    <Typography mb={2}>
                      {
                        booking
                          .bookingDetails
                          ?.travelClass
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Passengers
                    </Typography>

                    <Typography mb={2}>
                      {
                        booking
                          .bookingDetails
                          ?.numberOfPassengers
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Booked On
                    </Typography>

                    <Typography>
                      {new Date(
                        booking.bookedAt
                      ).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
}