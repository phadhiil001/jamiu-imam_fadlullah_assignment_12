import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactSection from "./ContactSection";

const props = {
  title: "Contact With Me",
  contactInfo: {
    image: "https://via.placeholder.com/300",
    name: "Fadlullah Jamiu-Imam",
    position: "Full-Stack Web Developer",
    description:
      "I am available for freelance work. Connect with me via and call in to my account.",
    phone: "+01234567890",
    email: "admin@example.com",
    socialLinks: [
      { icon: "facebook", url: "https://facebook.com" },
      { icon: "linkedin", url: "https://linkedin.com" },
      { icon: "instagram", url: "https://instagram.com" },
    ],
  },
};

test("renders the ContactSection", () => {
  render(<ContactSection {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByText(props.contactInfo.name)).toBeInTheDocument();
  expect(screen.getByText(props.contactInfo.position)).toBeInTheDocument();
  expect(screen.getByText(props.contactInfo.description)).toBeInTheDocument();
  expect(
    screen.getByText(`Phone: ${props.contactInfo.phone}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Email: ${props.contactInfo.email}`)
  ).toBeInTheDocument();
});

test("renders the contact form", () => {
  render(<ContactSection {...props} />);
  expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Subject")).toBeInTheDocument();
  expect(screen.getByLabelText("Your Message")).toBeInTheDocument();
});
