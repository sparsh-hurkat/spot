import { JourneyInterface, journeyList } from "../home/Journey/model";
import { allProjects, ProjectData } from "../home/Projects/commonModel";
import { skillTags } from "../home/Skills/model";
import { aboutLang } from "../home/About/model";
import fs from "fs/promises";
import fetch from "node-fetch";

async function fetchExternalSections() {
  const url = "https://raw.githubusercontent.com/sparsh-hurkat/guide-to-masters/main/src/constants.js";
  console.log(`[LOG] Fetching external sections from: ${url}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch constants.js");
  const jsContent = await response.text();

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

async function fetchMyMastersStory() {
  const url = "https://raw.githubusercontent.com/sparsh-hurkat/guide-to-masters/main/src/constants.js";
  console.log(`[LOG] Fetching myMastersStory from: ${url}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch constants.js");
  const jsContent = await response.text();
  const match = jsContent.match(/export const myStoryMarkdown = `([\s\S]*?)`;/);
  if (match) {
    const story = match[1];
    console.log(`[LOG] Successfully fetched myMastersStory. Length: ${story.length}`);
    return story;
  }
  console.log('[LOG] No myStoryMarkdown found in external file.');
  return null;
}

const convertProjectsModelToMarkdown = (
  allProjects: ProjectData[]
): string => {
  let projectNumber = 1;

  // group by sectionTitle
  const grouped = allProjects.reduce<Record<string, ProjectData[]>>(
    (acc, project) => {
      if (!acc[project.sectionTitle]) {
        acc[project.sectionTitle] = [];
      }
      acc[project.sectionTitle].push(project);
      return acc;
    },
    {}
  );

  return (
    `## Projects\n\n` +
    Object.entries(grouped)
      .map(([section, projects]) => {
        const sectionMarkdown =
          `### ${section}\n\n` +
          projects
            .map((project) => {
              const markdown =
                `#### Project ${projectNumber++}: ${project.title} (${project.date})\n` +
                project.description
                  .replace(/\n\nChallenges:-/, "\n\n#### Challenges:\n")
                  .replace(/\n\*/g, "\n-");

              return markdown;
            })
            .join("\n\n");

        return sectionMarkdown;
      })
      .join("\n\n") +
    `\n\n-------`
  );
};


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

const convertSkillsToMarkdown = (
  tags: { name: string; questions: number }[]
): string =>
  `## Skills\n\n` +
  tags.map((t) => `- **${t.name}** (${t.questions} questions)`).join("\n") +
  `\n\n-------`;

const convertAboutToMarkdown = (lang: { aboutContent: string }): string =>
  `## About Me\n\n${lang.aboutContent}\n\n-------`;

const convertSectionsToMarkdown = (sections: any[]): string =>
  `## Guide to Masters\n\n` +
  sections.map(
    s => (s.title ? `### ${s.title}\n` : "") + s.content
  ).join('\n\n') +
  `\n\n-------`;

const convertMyMastersStoryToMarkdown = (story: string): string =>
  `## My Masters Story\n\n${story}\n\n-------`;

const replaceSection = (content: string, sectionTitle: string, newSection: string) => {
  console.log(`[LOG] Replacing section: ${sectionTitle}`);
  const regex = new RegExp(`## ${sectionTitle}[\\s\\S]*?(?=\n## |$)`, 'i');
  if (!regex.test(content)) {
    console.warn(`[WARN] Section "${sectionTitle}" not found in content.`);
    return content;
  }
  return content.replace(regex, newSection);
};

async function updateMarkdownFile(existingFilePath: string) {
  try {
    let content = await fs.readFile(existingFilePath, "utf8");

    const externalSections = await fetchExternalSections();

    const myMastersStory = await fetchMyMastersStory();

    const updates = {
      "About Me": convertAboutToMarkdown(aboutLang),
      Skills: convertSkillsToMarkdown(skillTags),
      Journey: convertJourneyListToMarkdown(journeyList),
      Projects: convertProjectsModelToMarkdown(allProjects),
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
