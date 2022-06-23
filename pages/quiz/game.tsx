import { Heading, Image, Spinner, Text, useInterval } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { wrapper } from "app/store";
import axios from "axios";
import { QuizAnswerInput } from "components/quiz/game/QuizAnswerInput";
import { getCookie } from "cookies-next";
import { selectUser, setNickname, setUserScore } from "features/user";
import { Form, Formik, FormikProps } from "formik";
import { QuizGameLayout } from "layouts";
import { INITIAL_REMAINING_TIME, QUIZ_CATEGORY_NAME } from "lib/constant";
import { useRandomQuiz } from "lib/hooks/useQuiz";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const QuizGame: NextPage = () => {
  const { isLoading, error, data, mutate } = useRandomQuiz();
  const [isAnswer, setIsAnswer] = useState<null | boolean>(null);
  const [remainingTime, setRemainingTime] = useState(INITIAL_REMAINING_TIME);
  const { nickname, score } = useAppSelector(selectUser);
  const quizIndex = getCookie("quiz-index");
  const quizCategory = getCookie("quiz-category");
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    mutate();
  }, []);
  useEffect(() => {
    if (remainingTime === 0) {
      setIsAnswer(null);
      if (typeof quizIndex === "string" && +quizIndex === 10) {
        router.push("/quiz/result");
      }
      mutate();
      setRemainingTime(INITIAL_REMAINING_TIME);
    }
  }, [remainingTime]);
  useInterval(() => setRemainingTime(remainingTime - 1), 1000);
  if (isLoading)
    return (
      <QuizGameLayout
        quizCategory={
          typeof quizCategory === "string"
            ? QUIZ_CATEGORY_NAME[+quizCategory]
            : undefined
        }
        justifyContent={"center"}
      >
        <Spinner />
      </QuizGameLayout>
    );
  return (
    <QuizGameLayout
      quizCategory={
        typeof quizCategory === "string"
          ? QUIZ_CATEGORY_NAME[+quizCategory]
          : undefined
      }
      remainingTime={remainingTime}
      userScore={score}
    >
      <Heading
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"700"}
        color={"#844F00"}
        aria-label="quizGameNumber"
        mt={"8"}
      >
        {typeof quizIndex === "string" && quizIndex.padStart(2, "0")}
      </Heading>
      <Image
        maxH={"400px"}
        css={{ marginTop: "2.5rem!important" }}
        src={data?.quiz.description}
      />
      <Text css={{ marginTop: "3rem!important" }} fontSize={"2rem"}>
        {isAnswer === true
          ? `${nickname}님 정답입니다`
          : `${isAnswer !== null ? "틀렸습니다!" : ""}`}
      </Text>

      <Formik
        initialValues={{
          answer: "",
        }}
        onSubmit={async (values) => {
          if (!isAnswer && typeof data !== "undefined") {
            const res = await axios.post("/api/quiz/answer", {
              answer: values.answer,
              id: data.quiz.id,
            });
            setIsAnswer(res.data.answer);
            if (res.data.answer) dispatch(setUserScore(score + 1));
          }
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <QuizAnswerInput
              w={{ base: "50vw", md: "16rem" }}
              ml={{ md: "-8rem" }}
              position={"absolute"}
              left={"50vw"}
              bottom={"5vh"}
              fontSize={"2xl"}
              id="answer"
              value={props.values.answer}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form>
        )}
      </Formik>
    </QuizGameLayout>
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
export default QuizGame;
