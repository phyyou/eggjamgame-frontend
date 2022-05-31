import React, { FC } from "react";

import { Box, Container, ThemeProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Noto Sans KR",
  body: "Noto Sans KR",
};

const theme = extendTheme({
  fonts,
  components: {
    Text: {
      baseStyle: {
        color: "#844F00",
      },
    },
    Heading: {
      baseStyle: {
        color: "#844F00",
      },
    },
  },
  colors: {
    brand: {
      100: "#fffbf6",
      200: "#fff0db",
      300: "#ffebce",
      400: "#FFD494",
      500: "#ffbe5d",
      600: "#ec8d00",
      700: "#c97900",
      800: "#a16100",
      900: "#844F00",
    },
  },
});

interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export const QuizBaseLayout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        width={{ base: "100%" }}
        height={{ base: "100vh", md: "100vh" }}
        sx={{
          // aspectRatio: "19",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "/quiz-background.svg",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
