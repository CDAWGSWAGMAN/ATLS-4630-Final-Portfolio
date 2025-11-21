type SectionNavProps = {
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
};

export function SectionNav({
  onSkillsClick,
  onProjectsClick,
  onContactClick
}: SectionNavProps) {
  return (
    <nav className="section-nav">
      <button onClick={onSkillsClick}>Skills</button>
      <button onClick={onProjectsClick}>Projects</button>
      <button onClick={onContactClick}>Contact</button>
    </nav>
  );
}
