import axios from "axios";
import { getCookie, setCookies } from "cookies-next";
import { QuizPublicResponse } from "lib/@types/QuizAPI";
import { useMutation } from "react-query";
const fetchRandomQuiz = async (quizIndex: number, quizCategory: number) => {
  const { data } = await axios(
    `/api/quiz?quizIndex=${quizIndex}&quizCategory=${quizCategory}`
  );
  return data;
};

const useRandomQuiz = () => {
  return useMutation(async () => {
    const quizIndex = getCookie("quiz-index");
    const quizCategory = getCookie("quiz-category");
    if (typeof quizIndex === "string" && typeof quizCategory === "string") {
      const quiz = await fetchRandomQuiz(+quizIndex, +quizCategory);
      setCookies("quiz-index", +quizIndex + 1);
      return quiz;
    }
    return null;
  });
};

export { useRandomQuiz, fetchRandomQuiz };
