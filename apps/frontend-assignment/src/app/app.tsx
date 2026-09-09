import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { appTheme } from "../theme/theme";
import { BookingProvider } from "../context/BookingContext";
import AppRoutes from "../routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <BookingProvider>
        <AppRoutes />
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;