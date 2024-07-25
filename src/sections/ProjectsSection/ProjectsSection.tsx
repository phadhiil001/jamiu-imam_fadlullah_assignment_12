import styled from 'styled-components';
import { ProjectsSectionProps } from './ProjectsSection.types';

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  isVisible?: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  padding: 60px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#000'};
  color: #fff;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff0077;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled.div<{
  disabled?: boolean;
}>`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: #1c7cd6;
  }
`;

function ProjectsSection({ title, projects, backgroundColor, isVisible = true }: ProjectsSectionProps) {
  return (
    <SectionWrapper backgroundColor={backgroundColor} isVisible={isVisible}>
      <SectionTitle>{title}</SectionTitle>
      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={index} disabled={project.disabled}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" disabled={project.disabled}>
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </SectionWrapper>
  );
}

export default ProjectsSection;
