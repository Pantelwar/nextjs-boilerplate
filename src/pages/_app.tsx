import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Meta } from "components/common/Meta";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { appWithTranslation } from "next-i18next";
import nProgress from "nprogress";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "store";
import createEmotionCache from "utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const persistor = persistStore(store);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pantelwar</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Meta />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                <Toaster />
                <Component {...pageProps} />
              </LocalizationProvider>
            </ThemeProvider>
          )}
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
