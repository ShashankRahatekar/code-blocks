// definitions/index.ts

// type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
    id: string;
    title: string;
    difficulty: string;
    question: string;
    examples?: Array<String>,
    constraints: Array<String>
    testCases?: {
      input: string;
      output: string;
    }[];
    'starter-code'?: string,
  }