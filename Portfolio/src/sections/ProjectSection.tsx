import type { Project } from "../types";

type ProjectsSectionProps = {
  projects: Project[];
  onProjectClick: (project: Project) => void;
};

export function ProjectsSection({ projects, onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
          >
            {/* Top media area */}
            {project.image ? (
              <div className="project-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-media-img"
                />
              </div>
            ) : (
              // Fallback if a project ever has no image set
              <div className="project-image-placeholder">
                {project.title.charAt(0)}
              </div>
            )}

            {/* Text content */}
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>

              <div className="project-card-tags">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
