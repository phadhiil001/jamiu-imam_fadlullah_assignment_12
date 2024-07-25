import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import HomeSection from "./HomeSection";
import { HomeSectionProps } from "./HomeSection.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Sections/HomeSection",
  component: HomeSection,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<HomeSectionProps> = (args) => <HomeSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hi, I'm",
  subtitle: "Web Developer",
  description:
    "I design and code beautifully simple things, and I love what I do. I use animation as a third dimension by which I bring my creations to life.",
  socialLinks: [
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "instagram", url: "https://instagram.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
  ],
  profileImage: "https://via.placeholder.com/300",
  backgroundColor: "#000",
  isVisible: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const twitterLink = canvas.getByLabelText("twitter");
  await userEvent.click(twitterLink);
  action("Twitter link clicked")();
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};
