import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./MyButton";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof MyButton> = {
  title: "Components/MyButton",
  component: MyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "I am a button",
    disabled: false,
    isVisible: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("MyButton"));
  },
};

export const Disabled: Story = {
  args: {
    children: "I am a button",
    disabled: true,
    backgroundColor: "#ff5733",
    isVisible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("MyButton"));
  },
};
