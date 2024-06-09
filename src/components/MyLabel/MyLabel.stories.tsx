import type { Meta, StoryObj } from "@storybook/react";
import MyLabel from "./MyLabel";

const meta: Meta<typeof MyLabel> = {
  title: "Components/MyLabel",
  component: MyLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "This is a label",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "This is a label",
    disabled: false,
  },
};
