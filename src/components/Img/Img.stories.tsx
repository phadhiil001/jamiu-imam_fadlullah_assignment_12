import { StoryFn, Meta } from "@storybook/react";

import ImgStyled from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: ImgStyled,
  argTypes: {
    visible: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <ImgStyled {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  visible: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};
