import { Meta, StoryFn } from "@storybook/react";
import MyLabel from "./MyLabel";
import { MyLabelProps } from "./MyLabel.types";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/test";

const meta: Meta<MyLabelProps> = {
  title: "Components/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<MyLabelProps> = (args) => <MyLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a label",
  disabled: false,
  onClick: action("Label clicked"),
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("my-label"));
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  children: "This is a disabled label",
  disabled: true,
  onClick: action("Label clicked"),
};
DisabledState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("my-label"));
};
