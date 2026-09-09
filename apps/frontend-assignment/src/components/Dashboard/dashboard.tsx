import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import AppDrawer from "./drawer";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] =
    useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          bgcolor: "#fff",
          color: "#2c3e50",
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() =>
              setDrawerOpen(true)
            }
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <FlightTakeoffIcon
            sx={{
              color: "#2534A4",
              mr: 1,
            }}
          />

          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              color: "#2534A4",
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

          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>

          <IconButton size="small">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AppDrawer
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
      />
    </>
  );
}