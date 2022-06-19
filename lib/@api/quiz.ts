import { QuizBaseResponse, QuizzesResponse } from "lib/@types/QuizAPI";
import { API_BASE_URL } from "lib/constant";

export const getQuizes = async (): Promise<QuizzesResponse> => {
  const res = await fetch(`${API_BASE_URL}/quiz`);
  return await res.json();
};

export const getQuizesByCategory = async (
  id: number
): Promise<QuizzesResponse> => {
  const res = await fetch(`${API_BASE_URL}/quiz_category/${id}/quiz`);
  return await res.json();
};

export const getQuizById = async (id: number): Promise<QuizBaseResponse> => {
  const res = await fetch(`${API_BASE_URL}/quiz/${id}`);
  return await res.json();
};
