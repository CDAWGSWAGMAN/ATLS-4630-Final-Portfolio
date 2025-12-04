type SectionNavProps = {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
};

export function SectionNav({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}: SectionNavProps) {
  return (
    <nav className="section-nav">
      <button onClick={onAboutClick}>About</button>
      <button onClick={onSkillsClick}>Skills</button>
      <button onClick={onProjectsClick}>Projects</button>
      <button onClick={onContactClick}>Contact</button>
    </nav>
  );
}
