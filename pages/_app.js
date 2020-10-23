import Head from "next/head";
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import { ThemeProvider } from "styled-components";
import { StoreProvider } from "../stores/store";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";

const queryCache = new QueryCache()

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGfHLZvMJ1hhXkMokajj22p_CP_M3MRFw"
          type="text/javascript"
        ></script>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </>
  );
}
