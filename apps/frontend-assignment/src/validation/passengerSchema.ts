import * as yup from "yup";

export const passengerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  passengerType: yup
    .string()
    .required("Passenger type is required"),

  gender: yup
    .string()
    .required("Gender is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .positive("Age must be greater than 0"),

  seatPreference: yup
    .string()
    .required("Seat preference is required"),

  passportNumber: yup
    .string()
    .required("Passport number is required"),
});