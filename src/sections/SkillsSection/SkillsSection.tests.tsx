import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';

const props = {
  title: 'My Skills',
  skills: [
    { name: 'React', image: 'https://via.placeholder.com/100?text=React' },
    { name: 'InVision', image: 'https://via.placeholder.com/100?text=InVision' },
    { name: 'Figma', image: 'https://via.placeholder.com/100?text=Figma' },
  ],
};

test('renders the SkillsSection', () => {
  render(<SkillsSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  props.skills.forEach((skill) => {
    expect(screen.getByAltText(skill.name)).toBeInTheDocument();
  });
});
