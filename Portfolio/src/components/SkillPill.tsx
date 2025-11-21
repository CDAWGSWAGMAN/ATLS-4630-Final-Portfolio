type SkillPillProps = {
  logo: string;
  label: string;
};

export function SkillPill({ logo, label }: SkillPillProps) {
  return (
    <div className="skill-pill">
      <span className="skill-logo">{logo}</span>
      <span>{label}</span>
    </div>
  );
}
