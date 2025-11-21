// src/projects/ProjectDetails.tsx
import type { Project } from "../types";

type ProjectDetailsProps = {
  project: Project;
  onBack: () => void;
};

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <div className="project-detail-page">
      <button className="back-button" onClick={onBack}>
        ← Back to portfolio
      </button>

      <header className="project-detail-header">
        <div className="project-detail-image">
          {/* This is were image goes */}
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span>{project.title}</span>
          )}
        </div>

        <div className="project-detail-info">
          <p className="project-detail-kicker">Case study</p>
          <h1 className="project-detail-title">{project.title}</h1>

          <p className="project-detail-summary">
            {project.shortDescription}
          </p>

          <div className="project-detail-meta">
            <div>
              <h3>Skills</h3>
              <div className="project-detail-skills">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* add more meta blocks here. */}
          </div>
        </div>
      </header>

      <section className="project-detail-process">
        <h2>The process</h2>
        <p>{project.processText}</p>
      </section>
    </div>
  );
}
