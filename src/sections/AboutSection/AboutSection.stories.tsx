import { Meta, StoryFn } from "@storybook/react";
import AboutSection from "./AboutSection";
import { AboutSectionProps } from "./AboutSection.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Sections/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<AboutSectionProps> = (args) => (
  <AboutSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "About Me",
  description:
    "I am a passionate developer who loves to create beautiful and functional web applications. I have experience in various technologies and enjoy learning new skills.",
  cvLabel: "Download My CV",
  cvLink: "#",
  profileImage: "./images/about.jpg",
  backgroundColor: "#000",
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cvButton = canvas.getByText("Download My CV");
  await userEvent.click(cvButton);
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};
