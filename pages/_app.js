import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FavoritesProvider } from "../providers/FavoritesProvider";
import "../styles/globals.css";
import { useEffect } from "react";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#cccccc",
      contrastText: "#000",
    },
    secondary: {
      light: "#fff857",
      main: "#f5c518",
      dark: "#be9500",
      contrastText: "#000",
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#8790a6",
        },
        "&$filled": {
          color: "#8790a6",
        },
      },
    },
    MuiFormControl: {
      root: {
        backgroundColor: "#F3F3F3",
        margin: 8,
      },
    },
    MuiSelect: {
      icon: {
        color: "#f5c518",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default MyApp;
