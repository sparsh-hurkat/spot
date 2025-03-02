import { JourneyInterface, journeyList } from "../home/Journey/model";
import { projectsModel, ProjectsModel } from "../home/Projects/commonModel";
import { skillsLang } from "../home/Skills/model";
import { aboutLang } from "../home/About/model";
import fs from "fs/promises";

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

/**
 * Replaces a section in the markdown file.
 */
const replaceSection = (
  content: string,
  sectionTitle: string,
  newSection: string
): string =>
  content.replace(
    new RegExp(`## ${sectionTitle}[\\s\\S]*?(?=\\n## |$)`),
    newSection
  );

async function updateMarkdownFile(existingFilePath: string) {
  try {
    let content = await fs.readFile(existingFilePath, "utf8");

    const updates = {
      Projects: convertProjectsModelToMarkdown(projectsModel),
      Journey: convertJourneyListToMarkdown(journeyList),
      Skills: convertSkillsToMarkdown(skillsLang),
      "About Me": convertAboutToMarkdown(aboutLang),
    };

    for (const [section, newMarkdown] of Object.entries(updates)) {
      content = replaceSection(content, section, newMarkdown);
    }

    await fs.writeFile(existingFilePath, content, "utf8");
    console.log("Markdown sections successfully updated!");
  } catch (err) {
    console.error("Error updating markdown file:", err);
  }
}

updateMarkdownFile("server_files/Sparsh_Hurkat_data.md");
