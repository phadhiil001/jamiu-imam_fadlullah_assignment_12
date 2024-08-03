import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adjust this line to avoid using extend-expect
import AboutSection from "./AboutSection";

const props = {
  title: "About Me",
  description:
    "Hello! I'm Fadlullah Jamiu-Imam, a Full-Stack Web Developer with a passion for front-end development. Over the past two years, I've honed my skills in creating functional and visually appealing web projects.",
  cvLabel: "Download My CV",
  cvLink: "path/to/cv.pdf",
  profileImage: "./images/about.jpg",
};

test("renders the AboutSection", () => {
  render(<AboutSection {...props} />);

  // Get the section element by its role
  const section = screen.getByRole("region", { name: /about/i });

  // Within the section, find the elements to test
  expect(within(section).getByText(props.title)).toBeInTheDocument();
  expect(within(section).getByText(props.cvLabel)).toBeInTheDocument();
  expect(within(section).getByAltText("Profile")).toHaveAttribute(
    "src",
    props.profileImage
  );

  // Test the description separately, ensuring it exists within the section
  expect(
    within(section).getByText(props.description, { exact: false })
  ).toBeInTheDocument();
});

test("renders the profile image", () => {
  render(<AboutSection {...props} />);

  // Get the section element by its role
  const section = screen.getByRole("region", { name: /about/i });

  // Within the section, find the profile image
  const profileImage = within(section).getByAltText("Profile");
  expect(profileImage).toHaveAttribute("src", props.profileImage);
});
