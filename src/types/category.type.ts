import { Question } from "./question.type";

export interface Category {
  id: string;
  categoryTitle: string;
  questions: Question[];
}
