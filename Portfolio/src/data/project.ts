import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ticket-tracker",
    title: "TicketTracker / Tickety Split",
    image: "/images/ticket-tracker.png",
    skills: ["UX", "React", "Data Viz"],
    shortDescription:
      "Price comparison and community hub for concert tickets.",
    processText:
      "Here you’ll write your process: problem, research, ideation, iterations, testing, what you learned, etc."
  },
  {
    id: "sir-charts",
    title: "Sir-Charts-A-Lot",
    image: "/images/sir-charts.png",
    skills: ["Hackathon", "AI", "Figma"],
    shortDescription: "Playful medieval-themed chart generator for messy data.",
    processText: "Process narrative for this project…"
  }
  // add more
];
