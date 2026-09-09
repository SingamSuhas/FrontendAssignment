import * as yup from "yup";
import { NATIONALITIES } from "../constraints/nationalities";

const TRAVEL_TYPES = [
  "oneWay",
  "roundTrip",
  "multiCity",
] as const;

const GENDERS = [
  "Male",
  "Female",
  "Other",
] as const;

export const customerDetailsSchema = yup.object({
  travelType: yup
    .string()
    .oneOf(
      [...TRAVEL_TYPES],
      "Please select a valid travel type"
    )
    .required("Travel type is required"),

  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, apostrophes and hyphens"
    ),

  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(
      /^\d+$/,
      "Phone number can only contain digits"
    )
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long"),

  gender: yup
    .string()
    .oneOf(
      [...GENDERS],
      "Please select a valid gender"
    )
    .required("Gender is required"),

  nationality: yup
    .string()
    .oneOf(
      NATIONALITIES,
      "Please select a valid nationality"
    )
    .required("Nationality is required"),

  age: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Age must be a number")
    .required("Age is required")
    .integer("Age must be a whole number")
    .min(1, "Age must be at least 1")
    .max(120, "Age cannot exceed 120"),
});

export type CustomerDetailsFormData =
  yup.InferType<
    typeof customerDetailsSchema
  >;