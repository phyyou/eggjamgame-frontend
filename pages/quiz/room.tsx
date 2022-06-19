import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Flex } from "@chakra-ui/react";
import { QuizLobbyLayout } from "@layouts/quiz";
import {
  CirclePlusIcon,
  CodeFilledIcon,
  SelectBox,
} from "components/quiz/room";
import { useRouter } from "next/router";
import { wrapper } from "app/store";
import { useAppSelector } from "app/hooks";
import { setNickname } from "features/user";
import { getCookie, setCookies } from "cookies-next";

const QuizRoom: NextPage = () => {
  const router = useRouter();
  return (
    <QuizLobbyLayout>
      <Head>
        <title>eggjamgame - 퀴즈 룸</title>
        <meta name="description" content="Eggjamgame. Quiz Lobby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading mt={"3rem"} color={"white"}>
        참가하기
      </Heading>
      <Flex
        css={{ marginTop: "4rem!important" }}
        width={"100%"}
        height={"100%"}
        justify={"center"}
        gap={"6rem"}
      >
        <SelectBox
          icon={CirclePlusIcon}
          title={"방 만들기"}
          description={"직접 방을 생성합니다."}
          onClick={() => {
            setCookies("quiz-index", 0);
            router.push("/quiz/game");
          }}
        />
        <SelectBox
          icon={CodeFilledIcon}
          title={"초대 코드 입력하기"}
          description={"친구가 만든 방에 참가합니다."}
          onClick={() => {
            router.push("/quiz/game");
          }}
        />
      </Flex>
    </QuizLobbyLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps((store) =>
  //@ts-ignore
  async ({ req, res }) => {
    const _nickname = getCookie("nickname", { req, res });
    if (typeof _nickname === "string") {
      store.dispatch(setNickname(_nickname));
    }
    const {
      user: { nickname },
    } = store.getState();
    if (nickname === "") {
      return {
        redirect: {
          permanent: false,
          destination: "/quiz/start",
        },
      };
    }
  }
);
export default QuizRoom;
