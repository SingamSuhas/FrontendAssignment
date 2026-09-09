import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import {
  Box,
  Grid,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
} from "@mui/material";

import BookingLayout from "../../components/booking/BookingLayout";
import FooterActions from "../../components/booking/FooterActions";
import AppTextField from "../../components/common/AppTextField";

import { useCustomerDetails } from "../../hooks/useCustomerDetails";
import { NATIONALITIES } from "../../constraints/nationalities";
import { customerDetailsSchema } from "../../validation/customerDetailsSchema";

export default function CustomerDetailsPage() {
  const navigate = useNavigate();

  const { customerDetails, updateCustomerDetails } =
    useCustomerDetails();

  const [formData, setFormData] =
    useState(customerDetails);

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

  const validateForm = async () => {
    try {
      await customerDetailsSchema.validate(
        formData,
        {
          abortEarly: false,
        }
      );

      setErrors({});
      return true;
    } catch (error) {
      if (
        error instanceof yup.ValidationError
      ) {
        const validationErrors: Record<
          string,
          string
        > = {};

        error.inner.forEach((err) => {
          if (
            err.path &&
            !validationErrors[err.path]
          ) {
            validationErrors[err.path] =
              err.message;
          }
        });

        setErrors(validationErrors);
      }

      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateForm();

    if (!isValid) {
      return;
    }

    updateCustomerDetails(formData);
    navigate("/booking-details");
  };

  return (
    <BookingLayout currentStep={1}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Customer Details
      </Typography>

      <Typography
        color="text.secondary"
        mb={5}
      >
        Tell us a bit about yourself so we can
        keep you updated on your trip
      </Typography>

      <Typography
        fontWeight={600}
        mb={2}
      >
        Travel Type
      </Typography>

      <RadioGroup
        row
        value={formData.travelType}
        onChange={(e) =>
          handleChange(
            "travelType",
            e.target.value
          )
        }
      >
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="One Way"
        />

        <FormControlLabel
          value="roundTrip"
          control={<Radio />}
          label="Round Trip"
        />

        <FormControlLabel
          value="multiCity"
          control={<Radio />}
          label="Multi-City"
        />
      </RadioGroup>

      <Grid container spacing={3} mt={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            label="Name"
            value={formData.name}
            error={!!errors.name}
            helperText={errors.name}
            onChange={(e) =>
              handleChange(
                "name",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            label="Email"
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={(e) =>
              handleChange(
                "email",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <TextField
              select
              value={formData.phoneCode}
              sx={{ width: 100 }}
              onChange={(e) =>
                handleChange(
                  "phoneCode",
                  e.target.value
                )
              }
            >
              <MenuItem value="+91">
                +91
              </MenuItem>

              <MenuItem value="+1">
                +1
              </MenuItem>

              <MenuItem value="+44">
                +44
              </MenuItem>
            </TextField>

            <AppTextField
              label="Phone Number"
              value={formData.phoneNumber}
              error={!!errors.phoneNumber}
              helperText={
                errors.phoneNumber
              }
              onChange={(e) =>
                handleChange(
                  "phoneNumber",
                  e.target.value
                )
              }
            />
          </Box>
        </Grid>
        <FormControl
        fullWidth
        error={!!errors.gender}
        >
        <InputLabel>Gender</InputLabel>

        <Select
            value={formData.gender}
            label="Gender"
            onChange={(e) =>
            handleChange(
                "gender",
                e.target.value
            )
            }
        >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
        </Select>

        <FormHelperText>
            {errors.gender}
        </FormHelperText>
        </FormControl>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            fullWidth
            label="Nationality"
            value={formData.nationality}
            error={!!errors.nationality}
            helperText={
              errors.nationality
            }
            onChange={(e) =>
              handleChange(
                "nationality",
                e.target.value
              )
            }
          >
            {NATIONALITIES.map(
              (nationality) => (
                <MenuItem
                  key={nationality}
                  value={nationality}
                >
                  {nationality}
                </MenuItem>
              )
            )}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Age"
            value={formData.age}
            error={!!errors.age}
            helperText={errors.age}
            onChange={(e) =>
              handleChange(
                "age",
                e.target.value
              )
            }
          />
        </Grid>
      </Grid>

      <FooterActions
        onNext={handleNext}
      />
    </BookingLayout>
  );
}


