import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectsSection from "./ProjectsSection";

const props = {
  title: "My Projects",
  projects: [
    {
      title: "Project One",
      description: "This is the first project description.",
      image: "./images/zaytoon1.png",
      link: "https://google.com",
    },
    {
      title: "Project Two",
      description: "This is the second project description.",
      image: "./images/artcity.png",
      link: "https://google.com",
    },
    {
      title: "Project Three",
      description: "This is the third project description.",
      image: "./images/first.png",
      link: "https://google.com",
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
  const links = screen
    .getAllByText("View Project")
    .map((element) => element.closest("a"));
  links.forEach((link, index) => {
    expect(link).toHaveAttribute("href", props.projects[index].link);
  });
});
