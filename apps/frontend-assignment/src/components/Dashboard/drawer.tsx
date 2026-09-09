import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AppDrawer({
  open,
  onClose,
}: AppDrawerProps) {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: 300,
          height: "100%",
          bgcolor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
          >
            Menu
          </Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List disablePadding>
          <ListItemButton
            sx={{
              py: 2,
              px: 3,
            }}
            onClick={() => {
              navigate("/customer-details");
              onClose();
            }}
          >
            <ListItemText primary="Flight Booking" />
            <ChevronRightIcon />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}