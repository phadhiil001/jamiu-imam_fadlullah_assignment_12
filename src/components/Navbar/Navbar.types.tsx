export interface NavbarLink {
  label: string;
  url: string;
  disabled?: boolean;
}

export interface NavbarProps {
  links: NavbarLink[];
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}
