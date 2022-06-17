import { AppProps } from "next/app";
import Router from "next/router";

import { ChakraProvider } from "@chakra-ui/react";

import { wrapper } from "app/store";

import NProgress from "nprogress";
import theme from "../config/theme";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
