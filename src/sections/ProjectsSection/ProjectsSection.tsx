import React from "react";
import styled from "styled-components";
import { ProjectsSectionProps } from "./ProjectsSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  $isVisible?: boolean;
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

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 3rem;
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

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProjectCard = styled.div<{ disabled?: boolean }>`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    /* max-width: 300px; */
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ProjectImage = styled.img`
  border-radius: 20px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin: 15px 0;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProjectLink = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 12px 24px;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: #1c7cd6;
  }

  @media (max-width: 1024px) {
    padding: 10px 20px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

function ProjectsSection({
  title,
  projects,
  backgroundColor,
  isVisible = true,
}: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      backgroundColor={backgroundColor}
      $isVisible={isVisible}
    >
      <SectionTitle>{title}</SectionTitle>
      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            disabled={project.disabled}
            aria-label="project"
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
            />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink
              href={project.link}
              target="_blank"
              disabled={project.disabled}
            >
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </SectionWrapper>
  );
}

export default ProjectsSection;
