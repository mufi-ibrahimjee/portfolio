import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper, useMediaQuery } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { PersistGate } from "redux-persist/integration/react";

import { Provider, useStore } from "react-redux";
import NextProgress from "nextjs-progressbar";

import { darkTheme, lightTheme } from "../styles/theme";
import createEmotionCache from "../config/createEmotionCache";
import { wrapper } from "../redux/store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore((state) => state);
  const router = useRouter();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
  }, [prefersDarkMode]);

  return (
    <>
      <Head>
        <title> Mufaddal Ibrahimjee </title> {/* prevent zooming on Iphone  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={store.persistor} loading={<div> Loading </div>}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <Paper sx={{ width: "100%", height: "100%", boxShadow: "none" }}>
                <CssBaseline />
                <NextProgress
                  color={router.pathname === "/" ? "#F29103" : "#124AA1"}
                  startPosition={0.3}
                  stopDelayMs={200}
                  height={4}
                  options={{ showSpinner: false }}
                  showOnShallow={false}
                />
                {getLayout(<Component {...pageProps} setTheme={setTheme} />)}
              </Paper>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

MyApp.defaultProps = {
  emotionCache: undefined,
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.shape({}),
  pageProps: PropTypes.shape({}).isRequired,
};

export default wrapper.withRedux(MyApp);
