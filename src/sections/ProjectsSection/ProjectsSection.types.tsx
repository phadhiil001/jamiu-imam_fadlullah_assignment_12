export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  disabled?: boolean;
}

export interface ProjectsSectionProps {
  title: string;
  projects: Project[];
  backgroundColor?: string;
  isVisible?: boolean;
}
