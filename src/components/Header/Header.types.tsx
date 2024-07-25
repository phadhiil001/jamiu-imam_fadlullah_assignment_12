export interface Link {
  label: string;
  url: string;
  disabled?: boolean;
}

export interface HeaderProps {
  links: Link[];
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}
