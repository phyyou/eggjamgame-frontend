import axios from "axios";
import { getCookie, setCookies } from "cookies-next";
import { QuizPublicResponse } from "lib/@types/QuizAPI";
import { useMutation } from "react-query";
const fetchRandomQuiz = async (quizIndex: number) => {
  const { data } = await axios(`/api/quiz?quizIndex=${quizIndex}`);
  return data;
};

const useRandomQuiz = () => {
  return useMutation(async () => {
    const quizIndex = getCookie("quiz-index");
    if (typeof quizIndex === "string") {
      const quiz = await fetchRandomQuiz(+quizIndex);
      setCookies("quiz-index", +quizIndex + 1);
      return quiz;
    }
    return null;
  });
};

export { useRandomQuiz, fetchRandomQuiz };
