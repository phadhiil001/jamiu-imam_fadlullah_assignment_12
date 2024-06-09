import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./MyButton";

const meta: Meta<typeof MyButton> = {
  title: "Components/MyButton",
  component: MyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   args: { onClick: action("clicked") },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "I am a button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "I am a button",
    disabled: true,
  },
};
