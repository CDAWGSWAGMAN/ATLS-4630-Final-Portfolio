// src/sections/ProjectSection.tsx
import type { Project } from "../types";

type ProjectsSectionProps = {
  projects: Project[];
  onProjectClick: (project: Project) => void;
};

export function ProjectsSection({
  projects,
  onProjectClick,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
          >
            <div className="project-image-placeholder">
              {/*  <img>  */}
              <span>{project.title[0]}</span>
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div className="project-card-tags">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
