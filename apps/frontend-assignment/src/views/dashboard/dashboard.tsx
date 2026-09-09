import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          backgroundColor: "#fff",
          color: "#2c3e50",
        }}
      >
        <Toolbar>
          {/* Hamburger */}
          <IconButton
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <FlightTakeoffIcon
            sx={{
              color: "#283593",
              mr: 1,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#283593",
            }}
          >
            ALTIUS
            <Box
              component="span"
              sx={{
                fontWeight: 400,
              }}
            >
              FLY
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Notification */}
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          {/* Profile */}
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 300,
            height: "100%",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
            >
              Menu
            </Typography>

            <IconButton
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Menu Items */}
          <List disablePadding>
            <ListItemButton
              sx={{
                py: 2,
                px: 3,
              }}
            >
              <ListItemText primary="Flight Booking" />

              <ChevronRightIcon color="action" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}