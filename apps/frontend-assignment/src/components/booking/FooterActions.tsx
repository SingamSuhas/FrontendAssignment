import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

interface FooterActionsProps {
  showBack?: boolean;
  submit?: boolean;
  onBack?: () => void;
  onNext?: () => void;
}

export default function FooterActions({
  showBack = false,
  submit = false,
  onBack,
  onNext,
}: FooterActionsProps) {
  const navigate = useNavigate();
  const [cancelOpen, setCancelOpen] = useState(false);

  const handleCancelBooking = () => {
    setCancelOpen(false);
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 8,
        }}
      >
        <Button
          variant="text"
          onClick={() => setCancelOpen(true)}
          sx={{
            color: "#2837B7",
            fontWeight: 600,
          }}
        >
          Cancel
        </Button>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          {showBack && (
            <Button
              variant="outlined"
              onClick={onBack}
              sx={{
                minWidth: 180,
                height: 48,
                borderColor: "#2837B7",
                color: "#2837B7",
              }}
            >
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={onNext}
            sx={{
              minWidth: 180,
              height: 48,
              bgcolor: "#2837B7",

              "&:hover": {
                bgcolor: "#1F2A8A",
              },
            }}
          >
            {submit ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>

      <Dialog
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 4,
            textAlign: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setCancelOpen(false)}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            sx={{
              mb: 3,
              mt: 2,
            }}
          >
            <ErrorOutlinedIcon
              sx={{
                color: "#D92D20",
                fontSize: 48,
                backgroundColor: "#FEE4E2",
                borderRadius: "50%",
                p: 1,
              }}
            />
          </Box>

          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            Cancel Booking?
          </Typography>

          <Typography
            sx={{
              color: "#667085",
              mb: 4,
            }}
          >
            Are you sure you want to cancel your booking
            process?
            <br />
            Your entered details will not be saved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={handleCancelBooking}
              sx={{
                minWidth: 180,
                borderColor: "#D92D20",
                color: "#D92D20",
                fontWeight: 600,
              }}
            >
              Yes, Cancel
            </Button>

            <Button
              variant="contained"
              onClick={() => setCancelOpen(false)}
              sx={{
                minWidth: 180,
                bgcolor: "#2837B7",

                "&:hover": {
                  bgcolor: "#1F2A8A",
                },
              }}
            >
              Continue Booking
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}