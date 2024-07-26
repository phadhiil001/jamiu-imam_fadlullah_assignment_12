export interface SocialLink {
  icon: string;
  url: string;
}

export interface ContactInfo {
  image?: string;
  name?: string;
  position?: string;
  description?: string;
  phone?: string;
  email?: string;
  socialLinks?: SocialLink[];
}

export interface ContactSectionProps {
  title: string;
  contactInfo: ContactInfo;
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}
