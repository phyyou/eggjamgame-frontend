import { Heading, Container, VStack, HStack, Box } from "@chakra-ui/react";
import { QuizScoreLayout } from "layouts";
import { FC, useState } from "react";
import { ScoreBoardItem } from "components/quiz/scoreboard/ScoreBoardItem";
import { GoalBar } from "components/quiz/scoreboard/GoalBar";
import { selectNickname } from "features/nickname";
import { useAppSelector } from "app/hooks";

const QuizScore: FC = () => {
  const nickname = useAppSelector(selectNickname);
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
      <Container css={{ marginTop: "3rem!important" }} maxW="55vw">
        <HStack width={"100%"} height={"100%"} position={"relative"}>
          <VStack
            gap={"3rem"}
            alignItems={"unset"}
            width={"100%"}
            height={"100%"}
          >
            {[
              {
                score: 10,
                nickname: "19년 모쏠",
                barColor: "#9A8AFF",
              },
              { score: 5, nickname: "19년 모쏠", barColor: "#FF6C6C" },
              { score: 3, nickname: "19년 모쏠", barColor: "#68ED66" },
              { score: 1, nickname: "19년 모쏠", barColor: "#BC50FF" },
            ].map((ranks, idx) => (
              <ScoreBoardItem
                {...ranks}
                rank={idx + 1}
                key={`score-board-item-${idx}`}
              />
            ))}
          </VStack>
          <GoalBar
            css={{
              marginInlineStart: "0!important",
            }}
            position={"absolute"}
            top={"-4rem"}
            right={"-2.5rem"}
            height={"120%"}
          />
        </HStack>
      </Container>
    </QuizScoreLayout>
  );
};

export default QuizScore;
