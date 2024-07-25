import { render, screen } from "@testing-library/react";
import ProjectsSection from "./ProjectsSection";

const props = {
  title: "My Projects",
  projects: [
    {
      title: "Project One",
      description: "This is the first project description.",
      image: "https://via.placeholder.com/300",
      link: "https://example.com",
    },
    {
      title: "Project Two",
      description: "This is the second project description.",
      image: "https://via.placeholder.com/300",
      link: "https://example.com",
    },
  ],
};

test("renders the ProjectsSection", () => {
  render(<ProjectsSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  props.projects.forEach((project) => {
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
  });
});

test("renders project links", () => {
  render(<ProjectsSection {...props} />);
  props.projects.forEach((project) => {
    const link = screen.getByText("View Project").closest("a");
    expect(link).toHaveAttribute("href", project.link);
  });
});
