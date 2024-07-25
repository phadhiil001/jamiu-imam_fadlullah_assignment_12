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
  cvLink: "path/to/cv.pdf",
  profileImage: "https://via.placeholder.com/300",
  backgroundColor: "#000",
  isVisible: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cvButton = canvas.getByText("Download My CV");
  await userEvent.click(cvButton);
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};
