import { Meta, StoryFn } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: {
      // Adding a control for the disabled prop
      control: "boolean",
    },
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
  isVisible: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  links: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  isVisible: true,
  disabled: true,
};
