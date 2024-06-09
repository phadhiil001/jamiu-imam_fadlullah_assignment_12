import { Meta, StoryFn } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  links: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  backgroundColor: "#007bff",
};
