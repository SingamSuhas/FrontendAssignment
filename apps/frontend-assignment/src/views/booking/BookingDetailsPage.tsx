import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import {
  Typography,
  Grid,
  MenuItem,
  TextField,
  Divider,
} from "@mui/material";

import BookingLayout from "../../components/booking/BookingLayout";
import FooterActions from "../../components/booking/FooterActions";

import { useBookingDetails } from "../../hooks/useBookingDetails";
import { TRAVEL_CLASSES } from "../../constraints/travelClasses";
import { bookingDetailsSchema } from "../../validation/bookingDetailsSchema";
import FormSelect from "../../components/common/FormSection";
import { AIRPORTS } from "../../constraints/airports";
import { LANGUAGES } from "../../constraints/languages";

export default function BookingDetailsPage() {
  const navigate = useNavigate();

  const {
    bookingDetails,
    updateBookingDetails,
  } = useBookingDetails();

  const [formData, setFormData] = useState(
    bookingDetails
  );

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

const handleChange = (
  field: string,
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [field]: "",
  }));
};
  const handleNext = async () => {
    try {
      await bookingDetailsSchema.validate(
        formData,
        {
          abortEarly: false,
        }
      );

      setErrors({});

      updateBookingDetails(formData);

      navigate("/passenger-details");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: Record<
          string,
          string
        > = {};

        err.inner.forEach((error) => {
          if (
            error.path &&
            !validationErrors[error.path]
          ) {
            validationErrors[error.path] =
              error.message;
          }
        });

        setErrors(validationErrors);
      }
    }
  };

  return (
    <BookingLayout currentStep={2}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Booking Details
      </Typography>

      <Typography
        color="text.secondary"
        mb={5}
      >
        Choose your trip type,
        destinations, dates, and travel
        preferences.
      </Typography>

      <Grid
        container
        spacing={3}
      >
    <Grid size={{ xs: 12, md: 4 }}>
    <div style={{ marginBottom: "16px" }}>
    <FormSelect
    label="Origin"
    value={formData.origin}
    options={AIRPORTS.map((airport) => ({
        value: airport.code,
        label: `${airport.city} (${airport.code})`,
    }))}
    error={!!errors.origin}
    helperText={errors.origin}
    onChange={(value) =>
        handleChange("origin", value)
    }
    />

    </div>

        <FormSelect
        label="Destination"
        value={formData.destination}
        options={AIRPORTS.map((airport) => ({
            value: airport.code,
            label: `${airport.city} (${airport.code})`,
        }))}
        error={!!errors.destination}
        helperText={errors.destination}
        onChange={(value) =>
            handleChange("destination", value)
        }
        />
    </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
            <TextField
            fullWidth
            type="date"
            label="Departure Date"
            value={formData.departureDate}
            onChange={(e) =>
                handleChange("departureDate", e.target.value)
            }
            slotProps={{
                inputLabel: {
                shrink: true,
                },
            }}
            error={!!errors.departureDate}
            helperText={errors.departureDate}
            />
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Grid
        container
        spacing={3}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            fullWidth
            label="No. of Passengers"
            value={
              formData.numberOfPassengers
            }
            onChange={(e) =>
              handleChange(
                "numberOfPassengers",
                Number(e.target.value)
              )
            }
            error={
              !!errors.numberOfPassengers
            }
            helperText={
              errors.numberOfPassengers
            }
          >
            <MenuItem value={1}>
              1
            </MenuItem>

            <MenuItem value={2}>
              2
            </MenuItem>

            <MenuItem value={3}>
              3
            </MenuItem>

            <MenuItem value={4}>
              4
            </MenuItem>

            <MenuItem value={5}>
              5
            </MenuItem>
          </TextField>
        </Grid>

    <FormSelect
    label="Languages Spoken"
    value={formData.language}
    options={LANGUAGES.map((language) => ({
        value: language,
        label: language,
    }))}
    error={!!errors.language}
    helperText={errors.language}
    onChange={(value) =>
        handleChange("language", value)
    }
    />

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            fullWidth
            label="Travel Class"
            value={formData.travelClass}
            onChange={(e) =>
              handleChange(
                "travelClass",
                e.target.value
              )
            }
            error={!!errors.travelClass}
            helperText={
              errors.travelClass
            }
          >
            {TRAVEL_CLASSES.map(
              (travelClass) => (
                <MenuItem
                  key={travelClass}
                  value={travelClass}
                >
                  {travelClass}
                </MenuItem>
              )
            )}
          </TextField>
        </Grid>
      </Grid>

      <FooterActions
        showBack
        onBack={() =>
          navigate("/customer-details")
        }
        onNext={handleNext}
        onCancel={() => navigate("/")}
      />
    </BookingLayout>
  );
}
