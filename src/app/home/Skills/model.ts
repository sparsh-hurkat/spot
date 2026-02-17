export interface SkillTag {
  name: string;
  questions: number;
}

export const skillTags: SkillTag[] = [
  { name: "js/ts", questions: 24891 },
  { name: "java", questions: 23715 },
  { name: "aws", questions: 22107 },
  { name: "mysql/nosql", questions: 21347 },

  { name: "react", questions: 20493 },
  { name: "next", questions: 19762 },
  { name: "node", questions: 18436 },
  { name: "react-native", questions: 17629 },

  { name: "python", questions: 16854 },
  { name: "langchain", questions: 15271 },
  { name: "deep-learning", questions: 14208 },
  { name: "agentic-systems", questions: 11503 },

  { name: "git", questions: 9743 },
  { name: "kubernetes", questions: 9081 },
  { name: "docker", questions: 8145 },
  { name: "terraform", questions: 7562 },

  { name: "html", questions: 6278 },
  { name: "css", questions: 4319 },
  { name: "jest", questions: 3956 },
  { name: "sst", questions: 3841 },
];

export type SortMode = "popular" | "name" | "new";
