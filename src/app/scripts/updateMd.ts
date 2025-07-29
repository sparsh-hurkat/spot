import { JourneyInterface, journeyList } from "../home/Journey/model";
import { projectsModel, ProjectsModel } from "../home/Projects/commonModel";
import { skillsLang } from "../home/Skills/model";
import { aboutLang } from "../home/About/model";
import fs from "fs/promises";
import fetch from "node-fetch";

// Fetch and parse external constants.js from GitHub
async function fetchExternalSections() {
  const url = "https://raw.githubusercontent.com/sparsh-hurkat/guide-to-masters/main/src/constants.js";
  console.log(`[LOG] Fetching external sections from: ${url}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch constants.js");
  const jsContent = await response.text();
  // Extract the exported sections array
  const match = jsContent.match(/export const sections = (\[[\s\S]*?\]);/);
  if (match) {
    const arrLiteral = match[1];
    // eslint-disable-next-line no-eval
    const sections = eval(arrLiteral);
    console.log(`[LOG] Successfully fetched and parsed external sections. Count: ${sections.length}`);
    return sections;
  }
  console.log('[LOG] No sections array found in external file.');
  return null;
}

// Fetch and parse myStoryMarkdown from external constants.js
async function fetchMyMastersStory() {
  const url = "https://raw.githubusercontent.com/sparsh-hurkat/guide-to-masters/main/src/constants.js";
  console.log(`[LOG] Fetching myMastersStory from: ${url}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch constants.js");
  const jsContent = await response.text();
  // Extract the exported myStoryMarkdown string
  const match = jsContent.match(/export const myStoryMarkdown = `([\s\S]*?)`;/);
  if (match) {
    const story = match[1];
    console.log(`[LOG] Successfully fetched myMastersStory. Length: ${story.length}`);
    return story;
  }
  console.log('[LOG] No myStoryMarkdown found in external file.');
  return null;
}

const convertProjectsModelToMarkdown = (projectsModel: ProjectsModel): string =>
  `## Projects\n\n` +
  Object.entries(projectsModel)
    .flatMap(([category, projects], index) =>
      projects.map(
        (project, i) =>
          `### Project ${index + i + 1}: ${project.title} (${project.date})\n` +
          project.description
            .replace(/\n\nChallenges:-/, "\n\n#### Challenges:\n")
            .replace(/\n\*/g, "\n-")
      )
    )
    .join("\n\n") +
  `\n\n-------`;

const convertJourneyListToMarkdown = (
  journeyList: JourneyInterface[]
): string =>
  `## Journey\n\n` +
  journeyList
    .map(
      (journey) =>
        `### ${journey.name} (${journey.duration})\n${journey.description}`
    )
    .join("\n\n") +
  `\n\n-------`;

const convertSkillsToMarkdown = (lang: {
  skillsContent1: string;
  skillsContent2: string;
}): string =>
  `## Skills\n\n${lang.skillsContent1}\n\n${lang.skillsContent2}\n\n-------`;

const convertAboutToMarkdown = (lang: { aboutContent: string }): string =>
  `## About Me\n\n${lang.aboutContent}\n\n-------`;

// Convert the external sections array to Markdown
const convertSectionsToMarkdown = (sections: any[]): string =>
  `## Guide to Masters\n\n` +
  sections.map(
    s => (s.title ? `### ${s.title}\n` : "") + s.content
  ).join('\n\n') +
  `\n\n-------`;

// Convert myMastersStory to Markdown section
const convertMyMastersStoryToMarkdown = (story: string): string =>
  `## My Masters Story\n\n${story}\n\n-------`;

const replaceSection = (
  content: string,
  sectionTitle: string,
  newSection: string
): string => {
  console.log(`[LOG] Replacing section: ${sectionTitle}`);
  return content.replace(
    new RegExp(`## ${sectionTitle}[\s\S]*?(?=\n## |$)`),
    newSection
  );
};

async function updateMarkdownFile(existingFilePath: string) {
  try {
    let content = await fs.readFile(existingFilePath, "utf8");

    // Fetch and parse external sections
    const externalSections = await fetchExternalSections();
    // Fetch and parse myMastersStory
    const myMastersStory = await fetchMyMastersStory();

    const updates = {
      Projects: convertProjectsModelToMarkdown(projectsModel),
      Journey: convertJourneyListToMarkdown(journeyList),
      Skills: convertSkillsToMarkdown(skillsLang),
      "About Me": convertAboutToMarkdown(aboutLang),
      "Guide to Masters": externalSections ? convertSectionsToMarkdown(externalSections) : '',
      "My Masters Story": myMastersStory ? convertMyMastersStoryToMarkdown(myMastersStory) : '',
    };

    for (const [section, newMarkdown] of Object.entries(updates)) {
      if (newMarkdown) {
        console.log(`[LOG] Updating section: ${section}, content: ${newMarkdown}`);
        content = replaceSection(content, section, newMarkdown);
      }
    }
    console.log(`[LOG] Updated content: ${content}`);

    await fs.writeFile(existingFilePath, content, "utf8");
    console.log(`[LOG] Markdown sections successfully updated and written to: ${existingFilePath}`);
  } catch (err) {
    console.error("Error updating markdown file:", err);
  }
}

updateMarkdownFile("server_files/Sparsh_Hurkat_data.md");
