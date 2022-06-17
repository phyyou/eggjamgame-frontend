import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans-kr";

const fonts = {
  heading: "Noto Sans KR",
  body: "Noto Sans KR",
};

const styles = {
  global: {
    "html, #__next, body": {
      height: "100%",
    },
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      background: "white",
      position: "fixed",
      zIndex: "99999",
      top: 0,
      left: 0,
      width: "100%",
      height: "3px",
    },
  },
};

const theme = extendTheme({
  fonts,
  styles,
});

export default theme;
