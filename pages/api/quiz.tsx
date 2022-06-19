import { getQuizesByCategory } from "lib/@api/quiz";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const getRandomQuiz: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { quizIndex } = req.query;
  const quizzes = await getQuizesByCategory(1);
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
