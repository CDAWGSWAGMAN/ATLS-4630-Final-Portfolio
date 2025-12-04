import type React from "react";

type SkillPillProps = {
  logo: React.ReactNode;
  label: string;
};

export function SkillPill({ logo, label }: SkillPillProps) {
  return (
    <span className="skill-pill">
      <span className="skill-logo">
        {logo}
      </span>
      <span>{label}</span>
    </span>
  );
}
