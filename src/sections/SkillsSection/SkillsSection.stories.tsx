import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SkillsSection from "./SkillsSection";
import { SkillsSectionProps } from "./SkillsSection.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Sections/SkillsSection",
  component: SkillsSection,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<SkillsSectionProps> = (args) => (
  <SkillsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "My Skills",
  skills: [
    { name: "React", image: "./images/react.png" },
    {
      name: "HTML",
      image: "./images/html.png",
    },
    { name: "CSS", image: "./images/css.jpg" },
    {
      name: "JavaScript",
      image: "./images/js.png",
    },
    { name: "Ruby", image: "./images/ruby.jpeg" },
    { name: "PHP", image: "./images/php.png" },
    { name: "Java", image: "./images/java.png" },
    {
      name: "PostgreSQL",
      image: "./images/postgresql.png",
    },
    { name: "Git", image: "./images/git.png" },
    { name: "GithHub", image: "./images/github.jpg" },
  ],
  backgroundColor: "#000",
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const firstSkillCard = canvas.getByAltText("React").parentElement;
  await userEvent.hover(firstSkillCard);
  action("First skill card hovered")();
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
