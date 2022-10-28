import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "../../styles/globals.css";
import Header from "../components/Header";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const theme = createTheme({
  // direction: "rtl",
});

function MyApp({ Component, pageProps }) {
  return (
    <RTL>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </RTL>
  );
}

export default MyApp;
