
export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  category: string;
}

export enum AppView {
  Learning,
  Quiz
}
