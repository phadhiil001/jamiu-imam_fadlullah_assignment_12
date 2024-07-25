import { render, screen } from "@testing-library/react";
import HomeSection from "./HomeSection";

const props = {
  title: "Hi, I'm Fadlullah",
  subtitle: "Web Developer",
  description:
    "I design and code beautifully simple things, and I love what I do. I use animation as a third dimension by which I bring my creations to life.",
  socialLinks: [
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "instagram", url: "https://instagram.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
  ],
  profileImage: "path/to/your/profile/image.jpg",
};

test("renders the HomeSection", () => {
  render(<HomeSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByText(props.subtitle)).toBeInTheDocument();
  expect(screen.getByText(props.description)).toBeInTheDocument();
});

test("renders social links", () => {
  render(<HomeSection {...props} />);
  props.socialLinks.forEach((link) => {
    expect(screen.getByRole("link", { name: link.icon })).toBeInTheDocument();
  });
});

test("renders the profile image", () => {
  render(<HomeSection {...props} />);
  const profileImage = screen.getByAltText("Profile");
  expect(profileImage).toHaveAttribute("src", props.profileImage);
});
