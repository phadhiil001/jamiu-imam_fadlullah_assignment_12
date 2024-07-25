import styled from 'styled-components';
import { SkillsSectionProps } from './SkillsSection.types';

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

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SkillCard = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const SkillImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function SkillsSection({ title, skills, backgroundColor, isVisible = true }: SkillsSectionProps) {
  return (
    <SectionWrapper backgroundColor={backgroundColor} isVisible={isVisible}>
      <SectionTitle>{title}</SectionTitle>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillImage src={skill.image} alt={skill.name} />
          </SkillCard>
        ))}
      </SkillsWrapper>
    </SectionWrapper>
  );
}

export default SkillsSection;
