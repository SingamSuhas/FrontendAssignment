import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import FlightIcon from "@mui/icons-material/Flight";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <Paper
        elevation={3}
        sx={{
          minHeight: "95vh",
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
          position: "relative",
          overflow: "hidden",
        }}
        >
        {/* Top Right Link */}
        <Box
          sx={{
            position: "absolute",
            top: 32,
            right: 32,
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          >
          <HistoryIcon color="primary" />
          <Link
            underline="none"
            color="primary"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
            }}
            onClick={() => navigate("/previous-bookings")}
            >
            Previous Bookings
          </Link>
        </Box>

        {/* Center Content */}
        <Box
          sx={{
            minHeight: "95vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 3,
          }}
          >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
            >
            <FlightIcon
              sx={{
                fontSize: 40,
                color: "#1976d2",
              }}
              />
            Plan your next journey with ease!
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mb: 6,
              lineHeight: 1.8,
            }}
            >
            Book your flight in just 4 quick steps — choose your trip,
            enter passenger details, pick add-ons, and confirm payment.
            It only takes a few minutes!
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
              onClick={() => {
              navigate("/customer-details");
            }}
          >
            Start Booking!
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}