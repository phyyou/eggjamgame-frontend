import { Dispatch, FC, SetStateAction, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { QuizStartLayout } from "@layouts/quiz";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { selectNickname, setNickname } from "features/user";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setCookies } from "cookies-next";

const NicknameSection: FC = () => {
  const dispatch = useAppDispatch();
  const [_nickname, _setNickname] = useState("");
  return (
    <Flex
      marginTop={{ base: "25vh", md: "19rem" }}
      boxShadow={"0px 0px 0px 8px rgba(255, 212, 148, 0.5)"}
      justify={"center"}
      alignItems={"center"}
      maxHeight={"18rem"}
      height={"33%"}
      width={"100%"}
      backgroundColor={"rgba(255 212 148 / 1)"}
      flexDir="row"
    >
      <Input
        width={{ base: "75%", md: "33%" }}
        colorScheme={"gray"}
        textAlign={"center"}
        variant={"flushed"}
        fontSize={"3xl"}
        placeholder={"닉네임을 입력하세요"}
        _placeholder={{
          color: "#844F00",
          textAlign: "center",
        }}
        value={_nickname}
        onKeyUp={({ key }) => {
          if (key === "Enter") dispatch(setNickname(_nickname));
        }}
        onChange={(e) => {
          _setNickname(e.target.value);
        }}
      />
      <IconButton
        ml={"1rem"}
        borderRadius={"full"}
        colorScheme={"gray"}
        aria-label="Set Nickname"
        icon={<ArrowForwardIcon />}
        onClick={() => {
          dispatch(setNickname(_nickname));
        }}
      />
    </Flex>
  );
};

const StartSection: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const nickname = useAppSelector(selectNickname);
  return (
    <>
      <Flex
        marginTop={{ base: "25vh", md: "19rem" }}
        boxShadow={"0px 0px 0px 8px rgba(255, 212, 148, 0.5)"}
        justify={"center"}
        alignItems={"center"}
        maxHeight={"18rem"}
        height={"33%"}
        width={"100%"}
        backgroundColor={"rgba(255 212 148 / 1)"}
      >
        <Heading
          fontSize={{ base: "6xl", sm: "6xl", md: "7xl", lg: "8xl" }}
          fontWeight="bold"
        >
          인물 퀴즈
        </Heading>
      </Flex>
      <Text paddingTop={"50px"}>반갑습니다.</Text>
      <Text
        fontSize={"3xl"}
        onClick={() => {
          dispatch(setNickname(""));
        }}
      >
        {nickname} 님
      </Text>
      <Box>
        <Button
          borderRadius={"2xl"}
          size={"lg"}
          fontSize={"2xl"}
          height="4rem"
          paddingX={"6rem"}
          bgColor={"#844F00"}
          _hover={{
            bgColor: "brand.700",
          }}
          _active={{
            bgColor: "brand.700",
          }}
          colorScheme={"brand"}
          marginTop={"4rem"}
          onClick={() => {
            setCookies("nickname", nickname);

            router.push("/quiz/room");
          }}
        >
          시작하기
        </Button>
      </Box>
    </>
  );
};

const QuizStart: NextPage = () => {
  const nickname = useAppSelector(selectNickname);
  return (
    <QuizStartLayout>
      <Head>
        <title>eggjamgame - 퀴즈 시작</title>
        <meta name="description" content="Eggjamgame. Quiz Lobby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nickname === "" ? <NicknameSection /> : <StartSection />}
    </QuizStartLayout>
  );
};

export default QuizStart;
