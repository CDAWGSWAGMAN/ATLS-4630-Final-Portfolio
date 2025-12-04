import "../App.css";

import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.jpg";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/resume-7.png";

export function SocialLinks() {
  return (
    <div className="social-links">
      {/* Email */}
      <a
      href="mailto:cmalbers21@gmail.com"
      aria-label="Email"
      className="social-icon"
    >
        <img src={emailIcon} alt="Email" className="social-icon-img" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/CDAWGSWAGMAN" 
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="social-icon"
      >
        <img src={githubIcon} alt="GitHub" className="social-icon-img" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/carter-albers-9517992ab/" 
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="social-icon"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
      </a>

      {/* Resume */}
      <a
        href="/resume.pdf" 
        target="_blank"
        rel="noreferrer"
        aria-label="Resume"
        className="social-icon"
      >
        <img src={resumeIcon} alt="Resume" className="social-icon-img" />
      </a>
    </div>
  );
}
