import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import { userEvent, within } from "@storybook/test";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Twitter", url: "https://twitter.com", disabled: false },
    { label: "LinkedIn", url: "https://linkedin.com", disabled: false },
    { label: "GitHub", url: "https://github.com", disabled: false },
  ],
  backgroundColor: "#1a1a1a",
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const twitterLink = canvas.getByLabelText("Twitter");

  // Prevent default link behavior in Storybook
  twitterLink.addEventListener("click", (event) => {
    event.preventDefault();
    action("Twitter link clicked")();
  });

  await userEvent.click(twitterLink);
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const twitterLink = canvas.getByLabelText("Twitter");

  // Prevent default link behavior in Storybook
  twitterLink.addEventListener("click", (event) => {
    event.preventDefault();
    action("Twitter link clicked when disabled")();
  });

  await userEvent.click(twitterLink);
};
