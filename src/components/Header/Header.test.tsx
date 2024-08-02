import { render, screen } from "@testing-library/react";
import Header from "./Header";

const links = [
  { label: "Home", url: "#home" },
  { label: "About", url: "#about" },
  { label: "Skills", url: "#skills" },
  { label: "Projects", url: "#projects" },
  { label: "Contact", url: "#contact" },
];

test("renders the header", () => {
  render(<Header links={links} />);
  expect(screen.getByText("FJamiu-Imam")).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(<Header links={links} />);
  links.forEach((link) => {
    expect(screen.getByText(link.label)).toBeInTheDocument();
  });
});

test("renders the header with disabled links", () => {
  render(
    <Header
      links={links}
      disabled
    />
  );
  links.forEach((_link, index) => {
    const navLink = screen.getByTestId(`navbar-link-${index}`);
    expect(navLink).toHaveStyle("color: #999");
    expect(navLink).toHaveStyle("cursor: not-allowed");
  });
});
