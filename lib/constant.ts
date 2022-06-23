interface QuizCategory {
  [key: number]: string;
}
export const API_BASE_URL = process.env.API_BASE_URL;
export const INITIAL_REMAINING_TIME = 10;
export const QUIZ_CATEGORIES = [1, 3, 4];
export const QUIZ_CATEGORY_NAME: QuizCategory = {
  "1": "배우",
  "3": "국가원수",
  "4": "유명인",
};
