import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';

const props = {
  title: 'About Me',
  description: 'I am a passionate developer who loves to create beautiful and functional web applications. I have experience in various technologies and enjoy learning new skills.',
  cvLabel: 'Download My CV',
  cvLink: 'path/to/cv.pdf',
  profileImage: 'https://via.placeholder.com/300',
};

test('renders the AboutSection', () => {
  render(<AboutSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByText(props.description)).toBeInTheDocument();
  expect(screen.getByText(props.cvLabel)).toBeInTheDocument();
});

test('renders the profile image', () => {
  render(<AboutSection {...props} />);
  const profileImage = screen.getByAltText('Profile');
  expect(profileImage).toHaveAttribute('src', props.profileImage);
});
