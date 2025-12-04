import { useState } from "react";
import "./App.css";

import { Hero } from "./components/Hero";
import { SectionNav } from "./components/SectionNav";
import { SocialLinks } from "./components/SocialLinks";

import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectSection";
import { ContactSection } from "./sections/ContactSection";

import { ProjectDetails } from "./projects/ProjectDetails";
import { FadeInOnScroll } from "./components/FadeInOnScroll";

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

  function handleBackToPortfolio() {
   
    setSelectedProject(null);

    // scroll to the Projects section
    setTimeout(() => {
      scrollToSection("projects");
    }, 0);
  }

  // Project detail page
  if (selectedProject) {
    return (
      <div className="page">
        <SocialLinks />
        <div className="project-detail-shell">
          <ProjectDetails
            project={selectedProject}
            onBack={handleBackToPortfolio}
          />
        </div>
      </div>
    );
  }

  // Main portfolio layout
  return (
    <div className="page">
      <SocialLinks />

      <Hero />

      <div className="below-hero">
        <SectionNav
          onAboutClick={() => scrollToSection("about")}
          onSkillsClick={() => scrollToSection("skills")}
          onProjectsClick={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
        />

        <main className="content">
          {/* ABOUT SECTION */}
          <FadeInOnScroll>
            <section id="about" className="section section-top">
              <h2>About</h2>
              <div className="intro-blurb">
                <p>
                  As a multidisciplinary developer and designer, I specialize in
                  blending technical skills with creative thinking. With
                  expertise ranging from front-end web development to 3D
                  modeling, I create solutions that are both functional and
                  visually engaging.
                </p>
              </div>
            </section>
          </FadeInOnScroll>

          {/* SKILLS */}
          <FadeInOnScroll delayMs={80}>
            <SkillsSection />
          </FadeInOnScroll>

          {/* PROJECTS */}
          <FadeInOnScroll delayMs={120}>
            <ProjectsSection
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </FadeInOnScroll>

          {/* CONTACT */}
          <FadeInOnScroll delayMs={160}>
            <ContactSection />
          </FadeInOnScroll>
        </main>
      </div>
    </div>
  );
}
