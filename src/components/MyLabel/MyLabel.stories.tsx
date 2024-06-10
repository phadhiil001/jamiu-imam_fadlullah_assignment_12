// import type { Meta, StoryObj } from "@storybook/react";
// import MyLabel from "./MyLabel";

// const meta: Meta<typeof MyLabel> = {
//   title: "Components/MyLabel",
//   component: MyLabel,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
// };

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     children: "This is a label",
//     disabled: false,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     children: "This is a label",
//     disabled: false,
//   },
// };

import { Meta, StoryFn } from "@storybook/react";
import MyLabel from "./MyLabel";
import { MyLabelProps } from "./MyLabel.types";

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
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  children: "This is a disabled label",
  disabled: true,
};
