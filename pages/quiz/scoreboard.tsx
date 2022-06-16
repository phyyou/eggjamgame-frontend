import { Heading, Container, VStack, HStack } from "@chakra-ui/react";
import { QuizScoreLayout } from "layouts";
import { FC, useState } from "react";
import { ScoreBoardItem } from "components/quiz/scoreboard/ScoreBoardItem";
import { GoalBar } from "components/quiz/scoreboard/GoalBar";

const QuizScore: FC = () => {
  return (
    <QuizScoreLayout quizCategory={"인물"} remainingTime={10}>
      <Heading
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"700"}
        color={"#844F00"}
        aria-label="quizGameNumber"
        mt={"16"}
      >
        점수 현황
      </Heading>
      <Container css={{ marginTop: "3rem!important" }} maxW="87.5%">
        <HStack width={"100%"} height={"100%"}>
          <VStack
            gap={"2rem"}
            alignItems={"unset"}
            width={"100%"}
            height={"100%"}
          >
            {[...Array(4).keys()].map((number, idx) => (
              <ScoreBoardItem key={`score-board-item-${idx}`} />
            ))}
          </VStack>
          <GoalBar height={"100%"} />
        </HStack>
      </Container>
    </QuizScoreLayout>
  );
};

export default QuizScore;
