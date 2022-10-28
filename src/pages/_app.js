import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "../../styles/globals.css";
import Header from "../components/Header";

const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
