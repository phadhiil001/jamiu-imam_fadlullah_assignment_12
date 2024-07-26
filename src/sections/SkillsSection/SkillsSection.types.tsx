export interface Skill {
  name: string;
  image: string;
}

export interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}
