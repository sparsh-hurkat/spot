export interface SkillTag {
  name: string;
  questions: number;
  category: string;
  featured?: boolean;
}

export const skillCategories = [
  "All",
  "Featured",
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "AI & ML",
  "Testing",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skillTags: SkillTag[] = [
  { name: "js/ts", questions: 24891, category: "Frontend", featured: true },
  { name: "java", questions: 23715, category: "Backend", featured: true },
  { name: "aws", questions: 22107, category: "Cloud & DevOps", featured: true },
  { name: "mysql/nosql", questions: 21347, category: "Backend", featured: true },

  { name: "react", questions: 20493, category: "Frontend", featured: true },
  { name: "next", questions: 19762, category: "Frontend", featured: true },
  { name: "node", questions: 18436, category: "Backend", featured: true },
  { name: "react-native", questions: 17629, category: "Frontend" },

  { name: "python", questions: 16854, category: "AI & ML", featured: true },
  { name: "langchain", questions: 15271, category: "AI & ML", featured: true },
  { name: "deep-learning", questions: 14208, category: "AI & ML" },
  { name: "agentic-systems", questions: 11503, category: "AI & ML" },

  { name: "git", questions: 9743, category: "Cloud & DevOps" },
  { name: "kubernetes", questions: 9081, category: "Cloud & DevOps", featured: true },
  { name: "docker", questions: 8145, category: "Cloud & DevOps", featured: true },
  { name: "terraform", questions: 7562, category: "Cloud & DevOps" },

  { name: "html", questions: 6278, category: "Frontend" },
  { name: "css", questions: 4319, category: "Frontend" },
  { name: "jest", questions: 3956, category: "Testing" },
  { name: "sst", questions: 3841, category: "Cloud & DevOps" },
];

export type SortMode = "popular" | "name" | "new";
