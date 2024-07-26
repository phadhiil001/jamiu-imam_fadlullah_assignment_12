import styled from "styled-components";
import { AboutSectionProps } from "./AboutSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  padding: 60px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff0077;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CVButton = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function AboutSection({
  title,
  description,
  cvLabel,
  cvLink,
  profileImage,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: AboutSectionProps) {
  return (
    <SectionWrapper
      backgroundColor={backgroundColor}
      isVisible={isVisible}
      disabled={disabled}
    >
      <ContentWrapper>
        <ProfileImage
          src={profileImage}
          alt="Profile"
        />
        <TextWrapper>
          <SectionTitle>{title}</SectionTitle>
          <Description>{description}</Description>
          {cvLabel && cvLink && (
            <CVButton
              href={cvLink}
              target="_blank"
              disabled={disabled}
            >
              {cvLabel}
            </CVButton>
          )}
        </TextWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default AboutSection;
