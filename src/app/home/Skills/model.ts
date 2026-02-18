export interface SkillTag {
  name: string;
  questions: number;
  level: number; // 0–100 proficiency
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
  { name: "js/ts", questions: 24891, level: 85, category: "Frontend", featured: true },
  { name: "java", questions: 23715, level: 80, category: "Backend", featured: true },
  { name: "aws", questions: 22107, level: 65, category: "Cloud & DevOps", featured: true },
  { name: "mysql/nosql", questions: 21347, level: 65, category: "Backend", featured: true },

  { name: "react", questions: 20493, level: 87, category: "Frontend", featured: true },
  { name: "next", questions: 19762, level: 83, category: "Frontend", featured: true },
  { name: "node", questions: 18436, level: 60, category: "Backend", featured: true },
  { name: "react-native", questions: 17629, level: 50, category: "Frontend" },

  { name: "python", questions: 16854, level: 70, category: "AI & ML", featured: true },
  { name: "langchain", questions: 15271, level: 71, category: "AI & ML", featured: true },
  { name: "deep-learning", questions: 14208, level: 40, category: "AI & ML" },
  { name: "agentic-systems", questions: 11503, level: 65, category: "AI & ML" },

  { name: "git", questions: 9743, level: 79, category: "Cloud & DevOps" },
  { name: "kubernetes", questions: 9081, level: 62, category: "Cloud & DevOps", featured: true },
  { name: "docker", questions: 8145, level: 75, category: "Cloud & DevOps", featured: true },
  { name: "terraform", questions: 7562, level: 60, category: "Cloud & DevOps" },

  { name: "html", questions: 6278, level: 95, category: "Frontend" },
  { name: "css", questions: 4319, level: 95, category: "Frontend" },
  { name: "jest", questions: 3956, level: 53, category: "Testing" },
  { name: "sst", questions: 3841, level: 65, category: "Cloud & DevOps" },
];

export type SortMode = "popular" | "name" | "new";
