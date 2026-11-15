import type { Project } from "./types";

export const projectsIntro =
  "Three private Whisky Cask Club repositories, so there are no public links, screenshots or previews.";

export const projects: Project[] = [
  {
    id: "the-pour-mobile",
    repoLabel: "~/projects/wcc-the-pour",
    title: "The Pour — Mobile Application",
    description: "A mobile application developed for Whisky Cask Club using React Native and Expo.",
    tags: ["React Native", "Expo", "TypeScript"],
    details: [
      "Developing mobile application interfaces and workflows.",
      "Integrating application features with supporting backend services.",
      "Building and refining functionality for the mobile experience.",
    ],
  },
  {
    id: "the-pour-backend",
    repoLabel: "~/projects/wcc-the-pour-backend",
    title: "The Pour — Backend Services",
    description: "Backend services supporting The Pour application, including APIs, data management, and integrations.",
    tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL"],
    details: [
      "Developing and maintaining application API endpoints.",
      "Working on data models, database operations, and integrations.",
      "Supporting backend functionality for connected applications.",
    ],
  },
  {
    id: "the-pour-admin",
    repoLabel: "~/projects/wcc-the-pour-admin-web",
    title: "The Pour — Admin Dashboard",
    description: "A web-based administrative interface for managing and supporting application workflows.",
    tags: ["React", "Next.js", "TypeScript"],
    details: [
      "Developing administrative interfaces and reusable UI components.",
      "Building workflows for managing application information.",
      "Integrating administrative features with supporting services.",
    ],
  },
];
