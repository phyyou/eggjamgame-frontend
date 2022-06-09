import { Heading, Image, Text } from "@chakra-ui/react";
import { QuizAnswerInput } from "components/quiz/game/QuizAnswerInput";
import { Field, Form, Formik, FormikProps } from "formik";
import { QuizGameLayout } from "layouts";
import { FC, useState } from "react";

const QuizGame: FC = () => {
  return (
    <QuizGameLayout quizCategory={"인물"} remainingTime={10}>
      <Heading
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"700"}
        color={"#844F00"}
        aria-label="quizGameNumber"
        mt={"8"}
      >
        01
      </Heading>
      <Image
        maxH={"400px"}
        mt={"1.5rem"}
        src="https://blog.kakaocdn.net/dn/2whsQ/btrpz2FR1r1/TFvXkfkz3qWYjvz3nKgqI1/img.jpg"
      ></Image>
      <Text css={{ marginTop: "0.5rem!important" }} fontSize={"2rem"}>
        박효진 님 정답!
      </Text>
      <Text mt={"0px"} fontSize={"2rem"}>
        정답은 정희숙 입니다!
      </Text>
      <Formik
        initialValues={{
          answer: "",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <QuizAnswerInput
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

export default QuizGame;