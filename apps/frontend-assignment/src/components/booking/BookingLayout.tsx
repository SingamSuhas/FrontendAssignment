import { Box, Paper } from "@mui/material";
import BookingStepper from "./BookingStepper";

interface BookingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

export default function BookingLayout({
  children,
  currentStep,
}: BookingLayoutProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        p: 3,
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <BookingStepper currentStep={currentStep} />

        <Box
          sx={{
            flex: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Paper>
  );
}