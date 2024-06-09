import { Meta, StoryFn } from "@storybook/react";
import { SectionComponent } from "./SectionComponent";
import { SectionComponentProps } from "./SectionComponent.types";

export default {
  title: "Components/SectionComponent",
  component: SectionComponent,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      // defaultValue: false,
    },
    children: {
      control: "text",
      defaultValue: "Default Section Content",
    },
    backgroundColor: {
      control: "color",
      defaultValue: "#fff",
    },
  },
} as Meta;

const Template: StoryFn<SectionComponentProps> = (args) => (
  <SectionComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Default Section Content",
  disabled: false,
  backgroundColor: "#fff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Section Content",
  disabled: true,
  backgroundColor: "#2b8d7e",
};

