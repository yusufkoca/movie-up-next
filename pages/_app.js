import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FavoritesProvider } from "../providers/FavoritesProvider";
import Loading from "../components/Loading";
import "../styles/globals.css";

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
    MuiPaginationItem: {
      root: {
        color: "#be9500",
        backgroundColor: "rgba(245, 197, 24, 0.15)",
        "&$textSecondary": {
          "&$selected": {
            color: "#fff",
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Loading></Loading>
        <Component {...pageProps} />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default MyApp;
