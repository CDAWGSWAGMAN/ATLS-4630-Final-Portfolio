import { SkillPill } from "../components/SkillPill";

// import your icons
import uxLogo from "../assets/ux.jpg";
import reactLogo from "../assets/react.svg";
import aiLogo from "../assets/AI.webp";
import researchLogo from "../assets/research.png";
import figmaLogo from "../assets/figma.png";
import htmlLogo from "../assets/HTML.png";
import cssLogo from "../assets/CSS.png";
import jsLogo from "../assets/JavaScript.png";
import modelingLogo from "../assets/onshape.png";
import adobeLogo from "../assets/Adobe.png";
import pythonLogo from "../assets/Python.png";
import abletonLogo from "../assets/abelton.png";

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <SkillPill
          logo={<img src={uxLogo} alt="" className="skill-logo-img" />}
          label="UX & Visual Design"
        />
        <SkillPill
          logo={<img src={reactLogo} alt="" className="skill-logo-img" />}
          label="React & TypeScript"
        />
        <SkillPill
          logo={<img src={aiLogo} alt="" className="skill-logo-img" />}
          label="AI & Prompting"
        />
        <SkillPill
          logo={<img src={researchLogo} alt="" className="skill-logo-img" />}
          label="Data & User Research"
        />
        <SkillPill
          logo={<img src={figmaLogo} alt="" className="skill-logo-img" />}
          label="Figma, Framer, Prototyping"
        />
        <SkillPill
          logo={<img src={htmlLogo} alt="" className="skill-logo-img" />}
          label="HTML"
        />
        <SkillPill
          logo={<img src={cssLogo} alt="" className="skill-logo-img" />}
          label="CSS"
        />
        <SkillPill
          logo={<img src={jsLogo} alt="" className="skill-logo-img" />}
          label="JavaScript"
        />
        <SkillPill
          logo={<img src={modelingLogo} alt="" className="skill-logo-img" />}
          label="3D Modeling"
        />
        <SkillPill
          logo={<img src={adobeLogo} alt="" className="skill-logo-img" />}
          label="Adobe CC"
        />
        <SkillPill
          logo={<img src={pythonLogo} alt="" className="skill-logo-img" />}
          label="Python"
        />
        <SkillPill
          logo={<img src={abletonLogo} alt="" className="skill-logo-img" />}
          label="Ableton"
        />
      </div>
    </section>
  );
}
