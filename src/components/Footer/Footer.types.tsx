export interface Link {
    label: string;
    url: string;
    disabled?: boolean;
  }
  
  export interface FooterProps {
    links: Link[];
    backgroundColor?: string;
    isVisible?: boolean;
    disabled?: boolean;
  }
  