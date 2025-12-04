import { useState } from "react";
import type { Project } from "../types";

type ProjectDetailsProps = {
  project: Project;
  onBack: () => void;
};

type Slide = {
  src: string;
  isVideo: boolean;
};

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  const rawSources: string[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.image
      ? [project.image]
      : [];

  const slides: Slide[] = rawSources.map((src) => ({
    src,
    isVideo: /\.(mp4|webm|ogg|mov)$/i.test(src),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  function goPrev() {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="project-detail-page">
      <button className="back-button back-button-fixed" onClick={onBack}>
  ← Back to portfolio
</button>

      <header className="project-detail-header">
        <div className="project-detail-image">
          {slides.length > 0 ? (
            <div className="project-detail-carousel">
              <div className="project-detail-main">
                {slides.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="carousel-arrow carousel-arrow-left"
                      onClick={goPrev}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="carousel-arrow carousel-arrow-right"
                      onClick={goNext}
                    >
                      ›
                    </button>
                  </>
                )}

                {currentSlide.isVideo ? (
                  <video
                    src={currentSlide.src}
                    className="project-detail-media-video"
                    controls
                  />
                ) : (
                  <img
                    src={currentSlide.src}
                    alt={`${project.title} — ${currentIndex + 1} of ${
                      slides.length
                    }`}
                  />
                )}
              </div>

              {slides.length > 1 && (
                <div className="project-detail-thumbs">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.src + idx}
                      type="button"
                      className={
                        "thumb" + (idx === currentIndex ? " thumb-active" : "")
                      }
                      onClick={() => setCurrentIndex(idx)}
                    >
                      {slide.isVideo ? (
                        <div className="thumb-video">▶</div>
                      ) : (
                        <img
                          src={slide.src}
                          alt={`${project.title} thumbnail ${idx + 1}`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
