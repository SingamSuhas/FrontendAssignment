import { createTheme } from "@mui/material/styles";

import { colors } from "./colors";
import { typography } from "./typography";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
      light: colors.primary.light,
    },

    success: {
      main: colors.success.main,
    },

    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },

  typography,

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "medium",
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});