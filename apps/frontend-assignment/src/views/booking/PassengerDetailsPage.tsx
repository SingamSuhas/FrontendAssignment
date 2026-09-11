import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "yup";

import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import BookingLayout from "../../components/booking/BookingLayout";
import FooterActions from "../../components/booking/FooterActions";

import { useBookingDetails } from "../../hooks/useBookingDetails";
import { usePassengers } from "../../hooks/usePassengers";
import { passengerSchema } from "../../validation/passengerSchema";

export default function PassengerDetailsPage() {
  const navigate = useNavigate();

  const { bookingDetails } = useBookingDetails();

  const {
    passengers,
    addPassenger,
    updatePassenger,
  } = usePassengers();

  const [errors, setErrors] = useState<
    Record<string, Record<string, string>>
  >({});
  const numberOfPassengers =
    Number(bookingDetails.numberOfPassengers) || 0;

  useEffect(() => {
    if (numberOfPassengers <= 0) {
      return;
    }

    const passengersToAdd =
      numberOfPassengers - passengers.length;

    if (passengersToAdd <= 0) {
      return;
    }

    for (
      let index = 0;
      index < passengersToAdd;
      index++
    ) {
      addPassenger({
        id: crypto.randomUUID(),
        name: "",
        guardianName: "",
        passengerType: "",
        gender: "",
        age: "",
        seatPreference: "",
        passportNumber: "",
      });
    }
  }, [
    numberOfPassengers,
    passengers.length,
    addPassenger,
  ]);

  const displayedPassengers = passengers.slice(
    0,
    numberOfPassengers
  );

  const handleChange = (
    id: string,
    field: string,
    value: string
  ) => {
    updatePassenger(
      id,
      {
        value,
      } as Parameters<typeof updatePassenger>[1]
    );
    if (errors[id]?.[field]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [id]: {
          ...(previousErrors[id] ?? {}),
          [field]: "",
        },
      }));
    }
  };

  const validatePassengers = async () => {
    const validationErrors: Record<
      string,
      Record<string, string>
    > = {};

    let isValid = true;

    for (const passenger of displayedPassengers) {
      try {
        await passengerSchema.validate(passenger, {
          abortEarly: false,
        });
      } catch (error) {
        isValid = false;

        if (error instanceof ValidationError) {
          validationErrors[passenger.id] = {};

          error.inner.forEach((fieldError) => {
            if (
              fieldError.path &&
              !validationErrors[passenger.id][
                fieldError.path
              ]
            ) {
              validationErrors[passenger.id][
                fieldError.path
              ] = fieldError.message;
            }
          });
        }
      }
    }

    setErrors(validationErrors);

    return isValid;
  };

  const handleNext = async () => {
    if (numberOfPassengers <= 0) {
      navigate("/booking-details");
      return;
    }
    if (
      displayedPassengers.length <
      numberOfPassengers
    ) {
      return;
    }

    const isValid = await validatePassengers();

    if (isValid) {
      navigate("/review-submit");
    }
  };

  return (
    <BookingLayout currentStep={3}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Passenger Details
      </Typography>

      <Typography
        color="text.secondary"
        mb={2}
      >
        Enter details for each traveler to make
        sure everything is ready for check-in.
      </Typography>

      <Typography
        color="text.secondary"
        fontWeight={600}
        mb={5}
      >
        Number of passengers:{" "}
        {numberOfPassengers}
      </Typography>

      {displayedPassengers.map(
        (passenger, index) => (
          <Box
            key={passenger.id}
            mb={6}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              mb={3}
            >
              Passenger {index + 1}
            </Typography>

            <Grid
              container
              spacing={3}
            >

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  value={passenger.name}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "name",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]?.name
                  }
                  helperText={
                    errors[passenger.id]?.name
                  }
                />
              </Grid>


              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  select
                  fullWidth
                  label="Passenger Type"
                  value={passenger.passengerType}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "passengerType",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]
                      ?.passengerType
                  }
                  helperText={
                    errors[passenger.id]
                      ?.passengerType
                  }
                >
                  <MenuItem value="Adult">
                    Adult
                  </MenuItem>

                  <MenuItem value="Child">
                    Child
                  </MenuItem>

                  <MenuItem value="Infant">
                    Infant
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  fullWidth
                  type="number"
                  label="Age"
                  value={passenger.age}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "age",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]?.age
                  }
                  helperText={
                    errors[passenger.id]?.age
                  }
                  slotProps={{
                    htmlInput: {
                      min: 0,
                    },
                  }}
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  fullWidth
                  label="Guardian Name"
                  value={passenger.guardianName}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "guardianName",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]
                      ?.guardianName
                  }
                  helperText={
                    errors[passenger.id]
                      ?.guardianName
                  }
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  value={passenger.gender}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "gender",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]?.gender
                  }
                  helperText={
                    errors[passenger.id]?.gender
                  }
                >
                  <MenuItem value="Male">
                    Male
                  </MenuItem>

                  <MenuItem value="Female">
                    Female
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  select
                  fullWidth
                  label="Seat Preference"
                  value={passenger.seatPreference}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "seatPreference",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]
                      ?.seatPreference
                  }
                  helperText={
                    errors[passenger.id]
                      ?.seatPreference
                  }
                >
                  <MenuItem value="Window">
                    Window
                  </MenuItem>

                  <MenuItem value="Middle">
                    Middle
                  </MenuItem>

                  <MenuItem value="Aisle">
                    Aisle
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <TextField
                  fullWidth
                  label="Passport Number"
                  value={passenger.passportNumber}
                  onChange={(event) =>
                    handleChange(
                      passenger.id,
                      "passportNumber",
                      event.target.value
                    )
                  }
                  error={
                    !!errors[passenger.id]
                      ?.passportNumber
                  }
                  helperText={
                    errors[passenger.id]
                      ?.passportNumber
                  }
                />
              </Grid>
            </Grid>
          </Box>
        )
      )}

      <FooterActions
        showBack
        onBack={() =>
          navigate("/booking-details")
        }
        onNext={handleNext}
        onCancel={() => navigate("/")}
      />
    </BookingLayout>
  );
}