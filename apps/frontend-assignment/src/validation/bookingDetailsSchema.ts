import * as yup from "yup";

export const bookingDetailsSchema =
  yup.object({
    origin: yup.string().required(),

    destination: yup
      .string()
      .required(),

    departureDate: yup
      .string()
      .required(),

    numberOfPassengers: yup
      .number()
      .min(1)
      .required(),

    travelClass: yup
      .string()
      .required(),
  });