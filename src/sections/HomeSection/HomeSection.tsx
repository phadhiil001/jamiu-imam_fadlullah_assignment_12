import React from "react";
import styled from "styled-components";
import { HomeSectionProps } from "./HomeSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  $isVisible?: boolean;
  disabled?: boolean;
}>`
  padding: 7.6rem 1.5rem 5rem 1.5rem; /* Adjusted padding */
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  text-align: left; /* Changed text alignment to left */
  font-family: "Poppins", sans-serif;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 4rem; /* Adjusted font size */
  margin-bottom: 1rem; /* Adjusted margin */
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjusted font size for smaller screens */
  }

  span {
    color: #ff0077;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem; /* Adjusted font size */
  margin-bottom: 1rem; /* Adjusted margin */
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjusted font size for smaller screens */
  }
`;

const Description = styled.p`
  font-size: 1.25rem; /* Adjusted font size */
  margin-bottom: 2rem; /* Adjusted margin */
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjusted font size for smaller screens */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start; /* Changed to align left */
  gap: 1.5rem; /* Adjusted gap */
  margin-top: 1.5rem; /* Adjusted margin */
  z-index: 10; /* Ensure SocialLinks is on top */
  position: relative; /* Ensure z-index is applied */
`;

const SocialLink = styled.a<{ disabled?: boolean }>`
  color: #fff;
  font-size: 2rem; /* Adjusted font size */
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
    color: #ff0077;
  }
`;

const ProfileImage = styled.img`
  width: 460px; /* Adjusted width */
  height: 80%;
  border-radius: 10px;
  margin-top: 1.5rem; /* Adjusted margin */

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem; /* Adjusted gap */
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
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
  disabled = false,
}: HomeSectionProps) {
  return (
    <SectionWrapper
      id="home"
      backgroundColor={backgroundColor}
      $isVisible={isVisible}
      disabled={disabled}
      aria-label="home"
    >
      <ContentWrapper>
        <TextContent>
          <Title>
            {title}
            <span>Fadlullah</span>
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
                disabled={disabled}
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
