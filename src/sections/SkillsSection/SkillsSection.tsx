import React from "react";
import styled from "styled-components";
import { SkillsSectionProps } from "./SkillsSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  $isVisible?: boolean;
  disabled?: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  padding: 8rem 1.5rem 5rem 1.5rem;
  width: 100%;
  margin-top: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 4rem;
  color: #ff0077;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px; /* Increased gap for better spacing */
  margin-top: 20px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const SkillCard = styled.div<{ disabled?: boolean }>`
  background-color: white;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  pointer-events: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
    background-color: ${({ disabled }) => (disabled ? "#1a1a1a" : "#333")};
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 80;
    height: 80;
    padding: 15px;
  }
`;

const SkillImage = styled.img`
  border-radius: 20px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

function SkillsSection({
  title,
  skills,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: SkillsSectionProps) {
  return (
    <SectionWrapper
      id="skills"
      backgroundColor={backgroundColor}
      $isVisible={isVisible}
      disabled={disabled}
      aria-label="skill"
    >
      <SectionTitle>{title}</SectionTitle>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            disabled={disabled}
          >
            <SkillImage
              src={skill.image}
              alt={skill.name}
            />
          </SkillCard>
        ))}
      </SkillsWrapper>
    </SectionWrapper>
  );
}

export default SkillsSection;
