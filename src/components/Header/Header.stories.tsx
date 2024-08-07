import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "./Header";
import { HeaderProps } from "./Header.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Home", url: "#home", disabled: false },
    { label: "About", url: "#about", disabled: false },
    { label: "Skills", url: "#skills", disabled: false },
    { label: "Projects", url: "#projects", disabled: false },
    { label: "Contact", url: "#contact", disabled: false },
  ],
  backgroundColor: "#1a1a1a",
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByTestId("navbar-link-0");

  // Prevent default link behavior in Storybook
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    action("Home link clicked")();
  });

  await userEvent.click(homeLink);
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByTestId("navbar-link-0");

  // Prevent default link behavior in Storybook
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    action("Home link clicked")();
  });

  await userEvent.click(homeLink);
};
