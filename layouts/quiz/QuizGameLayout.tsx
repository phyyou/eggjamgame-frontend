import React, { FC } from "react";
import { Heading, VStack, StackProps } from "@chakra-ui/react";
import { QuizBaseLayout } from ".";
import "@fontsource/montserrat/700.css";
import { Timer } from "components/quiz/game/Timer";
import { ScoreStat } from "components/quiz/game/ScoreStat";

interface Props extends StackProps {
  quizCategory?: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
  remainingTime?: number;
  userScore?: number;
}

export const QuizGameLayout: FC<Props> = ({
  quizCategory,
  children,
  remainingTime,
  userScore,
  ...props
}) => {
  return (
    <QuizBaseLayout>
      <>
        {remainingTime && (
          <Timer
            display={{ base: "none", sm: "flex" }}
            position={"absolute"}
            top={"2rem"}
            left={"3rem"}
            remainingTime={remainingTime}
          />
        )}
        {typeof userScore !== "undefined" && (
          <ScoreStat
            display={{ base: "none", sm: "flex" }}
            fontSize={"5xl"}
            position={"absolute"}
            top={"45%"}
            right={"5rem"}
            color={"white"}
            score={userScore}
          />
        )}

        <VStack height={"full"} rowGap={"2rem"}>
          <Heading color={"#FFF1DC"} fontSize={"3rem"} mt={"3.5rem"}>
            {quizCategory} 퀴즈
          </Heading>
          <VStack
            bgColor={{ base: "unset", md: "#FFD494" }}
            height={"70vh"}
            width={{ base: "100%", md: "66vw" }}
            rounded={"3xl"}
            {...props}
          >
            {children}
          </VStack>
        </VStack>
      </>
    </QuizBaseLayout>
  );
};
