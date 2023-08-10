import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { PersistGate } from "redux-persist/integration/react";

import { Provider, useStore } from "react-redux";
import NextProgress from "nextjs-progressbar";

import theme from "../styles/theme";
import createEmotionCache from "../config/createEmotionCache";
import { wrapper } from "../redux/store";

import AuthGuard from "../components/Hoc/ProtectedRoute";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore((state) => state);
  const router = useRouter();

  // incase we get any issues with rehydation, remove <Provide>
  return typeof window !== "undefined" ? (
    <>
      <Head>
        <title>
          {window.location.hostname === "payments.ipayafrica.com"
            ? "iPay :: Payments made Easy"
            : "eLipa :: Simply Convenient"}
        </title>
        <link
          rel="icon"
          href={
            window.location.hostname === "payments.ipayafrica.com"
              ? "/favicon.ico"
              : "/logo/favicon.ico"
          }
        />
        {/* prevent zooming on Iphone  */}
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
                {Component.requireAuth ? (
                  <AuthGuard>
                    {getLayout(<Component {...pageProps} />)}
                  </AuthGuard>
                ) : (
                  <>{getLayout(<Component {...pageProps} />)}</>
                )}
              </Paper>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </>
  ) : (
    <>
      <Head>
        <title>
          {/* 
          {window.location.hostname === "payments.ipayafrica.com"
            ? "iPay :: Payments made Easy"
            : "eLipa :: Simply Convenient"} */}
        </title>
        <link
          rel="icon"
          // href={
          //   window.location.hostname === "payments.ipayafrica.com"
          //     ? "/favicon.ico"
          //     : "/logo/favicon.ico"
          // }
        />
        {/* prevent zooming on Iphone  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0,initial-scale=1.0, maximum-scale = 1.0, user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={store}>
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
                {Component.requireAuth ? (
                  <AuthGuard>
                    {getLayout(<Component {...pageProps} />)}
                  </AuthGuard>
                ) : (
                  <>{getLayout(<Component {...pageProps} />)}</>
                )}
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
