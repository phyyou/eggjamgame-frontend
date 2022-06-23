import { getQuizesByCategory } from "lib/@api/quiz";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const getRandomQuiz: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { quizIndex, quizCategory } = req.query;
  const quizzes = await getQuizesByCategory(+quizCategory);
  const quiz = quizzes[+quizIndex + 1];
  res.status(200).json({
    quiz: {
      description: quiz.description,
      category_id: quiz.category_id,
      id: quiz.id,
    },
  });
};

export default getRandomQuiz;
