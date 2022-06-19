import {
  Heading,
  Container,
  VStack,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { QuizScoreLayout } from "layouts";
import { FC, useState } from "react";
import { ScoreBoardItem } from "components/quiz/scoreboard/ScoreBoardItem";
import { GoalBar } from "components/quiz/scoreboard/GoalBar";
import { selectUser } from "features/user";
import { useAppSelector } from "app/hooks";
import { useRouter } from "next/router";

const QuizScore: FC = () => {
  const { nickname, score } = useAppSelector(selectUser);
  const router = useRouter();
  return (
    <QuizScoreLayout quizCategory={"배우"}>
      <Heading
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"700"}
        color={"#844F00"}
        aria-label="quizGameNumber"
        mt={"16"}
      >
        최종 점수
      </Heading>
      <Container css={{ marginTop: "3rem!important" }} maxW="55vw">
        <HStack width={"100%"} height={"100%"} position={"relative"}>
          <VStack
            gap={"3rem"}
            alignItems={"unset"}
            width={"100%"}
            height={"100%"}
            minH={"45vh"}
          >
            {[
              {
                score: score,
                nickname: nickname,
                barColor: "#9A8AFF",
              },
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
        <Button
          pos={"absolute"}
          w={"100px"}
          bottom={"2rem"}
          left={"calc(50% - 50px);"}
          borderRadius={"full"}
          bgColor={"#844F00"}
          color={"white"}
          onClick={() => {
            router.push("/quiz/room");
          }}
        >
          다시하기
        </Button>
      </Container>
    </QuizScoreLayout>
  );
};

export default QuizScore;
