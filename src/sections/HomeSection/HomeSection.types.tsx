export interface SocialLink {
  icon: string;
  url: string;
}

export interface HomeSectionProps {
  title: string;
  subtitle: string;
  description: string;
  socialLinks: SocialLink[];
  profileImage: string;
  backgroundColor?: string;
  isVisible?: boolean;
}
