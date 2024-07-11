import { StoryFn, Meta } from "@storybook/react";
import MyImg from "./Img";
import { ImgProps } from "./Img.types";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/test";

export default {
  title: "Components/Img",
  component: MyImg,
  argTypes: {
    visible: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <MyImg {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  visible: true,
  disabled: false,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgComponent = canvas.getByTestId("img-component");
  await userEvent.click(imgComponent);
  action("Image clicked")();
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgComponent = canvas.getByTestId("img-component");
  await userEvent.click(imgComponent);
  action("Image clicked")();
};
