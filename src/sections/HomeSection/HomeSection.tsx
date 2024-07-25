import styled from "styled-components";
import { HomeSectionProps } from "./HomeSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  isVisible?: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  padding: 60px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  span {
    color: #ff0077;
  }
`;

const Subtitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0077;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
`;

function HomeSection({
  title,
  subtitle,
  description,
  socialLinks,
  profileImage,
  backgroundColor,
  isVisible = true,
}: HomeSectionProps) {
  return (
    <SectionWrapper
      backgroundColor={backgroundColor}
      isVisible={isVisible}
    >
      <ContentWrapper>
        <TextContent>
          <Title>
            {title} <span>Fadlullah</span>
          </Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                aria-label={link.icon}
              >
                <i className={`fab fa-${link.icon}`} />
              </SocialLink>
            ))}
          </SocialLinks>
        </TextContent>
        <ProfileImage
          src={profileImage}
          alt="Profile"
        />
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default HomeSection;
