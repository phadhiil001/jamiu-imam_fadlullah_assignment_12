import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillsSection from "./SkillsSection";

const props = {
  title: "My Skills",
  skills: [
    { name: "React", image: "./images/react.png" },
    {
      name: "Html",
      image: "./images/html.png",
    },
    { name: "Ruby", image: "./images/ruby.jpeg" },
  ],
};

test("renders the SkillsSection", () => {
  render(<SkillsSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  props.skills.forEach((skill) => {
    expect(screen.getByAltText(skill.name)).toBeInTheDocument();
  });
});
