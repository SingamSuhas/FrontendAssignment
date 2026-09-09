import { Box, Typography } from "@mui/material";

interface BookingStepperProps {
  currentStep: number;
}

const steps = [
  "Customer Details",
  "Booking Details",
  "Passenger Details",
  "Review and Submit",
];

export default function BookingStepper({
  currentStep,
}: BookingStepperProps) {
  return (
    <Box
      sx={{
        width: 270,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        p: 3,
        minHeight: "700px",
      }}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <Box key={step}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  bgcolor: isCompleted
                    ? "#15803D"
                    : "transparent",
                  border: isCompleted
                    ? "none"
                    : isCurrent
                    ? "2px solid #2837B7"
                    : "2px solid #CBD5E1",
                  color: isCompleted
                    ? "#FFFFFF"
                    : isCurrent
                    ? "#2837B7"
                    : "#94A3B8",
                }}
              >
                {stepNumber}
              </Box>

              <Typography
                sx={{
                  fontSize: 16,
                  color: "#4B5563",
                }}
              >
                {step}
              </Typography>
            </Box>

            {stepNumber < steps.length && (
              <Box
                sx={{
                  width: 1,
                  height: 42,
                  bgcolor: "#CBD5E1",
                  ml: "13px",
                  my: 1,
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}