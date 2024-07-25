import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const links = [
  { label: 'Twitter', url: '#twitter' },
  { label: 'LinkedIn', url: '#linkedin' },
  { label: 'GitHub', url: '#github' },
];

test('renders the footer', () => {
  render(<Footer links={links} />);
  expect(screen.getByText('&copy; 2024 FJamiu-Imam. All rights reserved.')).toBeInTheDocument();
});

test('renders social links', () => {
  render(<Footer links={links} />);
  links.forEach((link) => {
    expect(screen.getByText(link.label)).toBeInTheDocument();
  });
});

test('renders the footer with disabled links', () => {
  render(<Footer links={links} disabled />);
  links.forEach((_link, index) => {
    const socialLink = screen.getByTestId(`footer-link-${index}`);
    expect(socialLink).toHaveStyle('color: #999');
    expect(socialLink).toHaveStyle('cursor: not-allowed');
  });
});
