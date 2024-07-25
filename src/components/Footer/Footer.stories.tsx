import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import { userEvent, within } from "@storybook/test";

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
  await userEvent.click(twitterLink);
  action("Twitter link clicked")();
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
