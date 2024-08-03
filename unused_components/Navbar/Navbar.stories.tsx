import { Meta, StoryFn } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/test";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
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
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByTestId("navbar-link-0");
  await userEvent.click(homeLink);
  action("Home link clicked")();
};

export const Disabled = Template.bind({});
Disabled.args = {
  links: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact", disabled: true },
  ],
  isVisible: true,
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByTestId("navbar-link-0");
  await userEvent.click(homeLink);
  action("Disabled home link clicked")();
};
