import { SkillPill } from "../components/SkillPill";

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {/* Replace these with your real skills */}
        <SkillPill logo="🎨" label="UX & Visual Design" />
        <SkillPill logo="⚛️" label="React & TypeScript" />
        <SkillPill logo="🧠" label="AI & Prompting" />
        <SkillPill logo="🧮" label="Data & Research" />
        <SkillPill logo="🧰" label="Figma, Framer, Prototyping" />
      </div>
    </section>
  );
}
