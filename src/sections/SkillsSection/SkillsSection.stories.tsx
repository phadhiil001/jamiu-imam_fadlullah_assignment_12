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
    { name: "React", image: "https://via.placeholder.com/100?text=React" },
    {
      name: "HTML",
      image: "https://via.placeholder.com/100?text=HTML",
    },
    { name: "CSS", image: "https://via.placeholder.com/100?text=CSS" },
    {
      name: "JavaScript",
      image: "https://via.placeholder.com/100?text=JavaScript",
    },
    { name: "Ruby", image: "https://via.placeholder.com/100?text=Ruby" },
    { name: "PHP", image: "https://via.placeholder.com/100?text=PHP" },
    { name: "Java", image: "https://via.placeholder.com/100?text=Java" },
    {
      name: "PostgreSQL",
      image: "https://via.placeholder.com/100?text=PostgreSql",
    },
    { name: "Git", image: "https://via.placeholder.com/100?text=Git" },
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
