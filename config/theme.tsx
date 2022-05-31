import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans-kr";

const fonts = {
  heading: "Noto Sans KR",
  body: "Noto Sans KR",
};

const theme = extendTheme({
  global: {
    "html, body": {
      height: "100%",
    },
  },
  fonts,
});

export default theme;
