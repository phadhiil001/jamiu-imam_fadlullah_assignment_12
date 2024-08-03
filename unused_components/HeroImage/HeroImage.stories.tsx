import { Meta, StoryFn } from "@storybook/react";
import { HeroImage } from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    children: {
      control: "text",
      defaultValue: "Default Hero Content",
    },
    backgroundImage: {
      control: "text",
      defaultValue: "https://via.placeholder.com/1200x600.png?text=Hero+Image",
    },
  },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Default Hero Content",
  disabled: false,
  backgroundImage: "https://via.placeholder.com/1200x600.png?text=Hero+Image",
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroImage = canvas.getByTestId("hero-image");

  // Hover state
  await userEvent.hover(heroImage);

  // Click event
  await userEvent.click(heroImage);
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Hero Content",
  disabled: true,
  backgroundImage: "https://via.placeholder.com/1200x600.png?text=Hero+Image",
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroImage = canvas.getByTestId("hero-image");

  await userEvent.click(heroImage);
  await userEvent.hover(heroImage);
};
