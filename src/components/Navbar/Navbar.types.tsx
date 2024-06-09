export interface NavbarLink {
    label: string;
    url: string;
  }
  
  export interface NavbarProps {
    links: NavbarLink[];
    backgroundColor?: string;
  }
  