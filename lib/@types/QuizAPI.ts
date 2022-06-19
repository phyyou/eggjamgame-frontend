export type QuizBaseResponse = {
  description: string;
  id: number;
  answer: string;
  category_id: number;
};

export type QuizPublicResponse = Omit<QuizBaseResponse, "answer">;

export type QuizzesResponse = QuizBaseResponse[];
