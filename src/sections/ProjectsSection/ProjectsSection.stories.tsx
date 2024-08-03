import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ProjectsSection from "./ProjectsSection";
import { ProjectsSectionProps } from "./ProjectsSection.types";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/test";

export default {
  title: "Sections/ProjectsSection",
  component: ProjectsSection,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ProjectsSectionProps> = (args) => (
  <ProjectsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "My Projects",
  projects: [
    {
      title: "Project One",
      description: "This is the first project description.",
      image: "./images/zaytoon1.png",
      link: "https://google.com",
      disabled: false,
    },
    {
      title: "Project Two",
      description: "This is the second project description.",
      image: "./images/artcity.png",
      link: "https://google.com",
      disabled: false,
    },
    {
      title: "Project Three",
      description: "This project is currently unavailable.",
      image: "./images/first.png",
      link: "#",
      disabled: true,
    },
  ],
  backgroundColor: "#000",
  isVisible: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const firstProjectCard = canvas.getByText("Project One").closest("div");
  await userEvent.hover(firstProjectCard);
  action("First project card hovered")();
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const DisabledProject = Template.bind({});
DisabledProject.args = {
  ...Default.args,
  projects: Default.args.projects.map((project) => ({
    ...project,
    disabled: true,
  })),
};
