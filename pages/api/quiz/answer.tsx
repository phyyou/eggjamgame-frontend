import { getQuizById } from "lib/@api/quiz";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const isAnswer: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const { id, answer } = req.body;
  const quiz = await getQuizById(id);
  if (answer === quiz.answer) {
    res.status(200).json({ answer: true });
    return;
  }
  res.status(200).json({ answer: false });
};

export default isAnswer;
