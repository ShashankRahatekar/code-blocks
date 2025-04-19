// definitions/index.ts

export interface Problem {
    id: string;
    title: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    question: string;
    example?: Array<String>,
    constraints: Array<String>
    testCases?: {
      input: string;
      output: string;
    }[];
  }