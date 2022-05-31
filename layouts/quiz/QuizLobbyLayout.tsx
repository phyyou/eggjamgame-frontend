import React, { FC } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { QuizBaseLayout } from ".";

interface Props {
  isLogo?: boolean;
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export const QuizLobbyLayout: FC<Props> = ({ children }) => {
  return (
    <QuizBaseLayout>
      <VStack height={"full"}>{children}</VStack>
    </QuizBaseLayout>
  );
};
