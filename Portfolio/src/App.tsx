// src/App.tsx
import { useState } from "react";
import "./App.css";

import { Hero } from "./components/Hero";
import { SectionNav } from "./components/SectionNav";
import { SocialLinks } from "./components/SocialLinks";

import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectSection";
import { ContactSection } from "./sections/ContactSection";

import { ProjectDetails } from "./projects/ProjectDetails";

import { projects } from "./data/project";
import type { Project } from "./types";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function handleProjectClick(project: Project) {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // Project detail “page”
  if (selectedProject) {
    return (
      <div className="page">
        <SocialLinks />

        <div className="page-inner">
          <ProjectDetails
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        </div>
      </div>
    );
  }

  // Main portfolio layout
  return (
    <div className="page">
      <SocialLinks />

      <div className="page-inner">
        <Hero />

        <SectionNav
          onSkillsClick={() => scrollToSection("skills")}
          onProjectsClick={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
        />

        <main className="content">
          <SkillsSection />

          <ProjectsSection
            projects={projects}
            onProjectClick={handleProjectClick}
          />

          <ContactSection />
        </main>
      </div>
    </div>
  );
}
