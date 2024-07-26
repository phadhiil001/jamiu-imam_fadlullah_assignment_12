import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactSection from "./ContactSection";
import { ContactSectionProps } from "./ContactSection.types";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Sections/ContactSection",
  component: ContactSection,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isVisible: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ContactSectionProps> = (args) => (
  <ContactSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Contact With Me",
  contactInfo: {
    image: "https://via.placeholder.com/300",
    name: "Fadlullah Jamiu-Imam",
    position: "Full-Stack Web Developer",
    description:
      "I am available for freelance work. Connect with me via and call in to my account.",
    phone: "+1234567890",
    email: "admin@example.com",
    socialLinks: [
      { icon: "facebook", url: "https://facebook.com" },
      { icon: "linkedin", url: "https://linkedin.com" },
      { icon: "instagram", url: "https://instagram.com" },
    ],
  },
  backgroundColor: "#000",
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nameInput = canvas.getByLabelText("Your Name");
  await userEvent.type(nameInput, "John Doe");
  action("Name input filled")();

  const phoneInput = canvas.getByLabelText("Phone Number");
  await userEvent.type(phoneInput, "1234567890");
  action("Phone input filled")();

  const emailInput = canvas.getByLabelText("Email");
  await userEvent.type(emailInput, "john@example.com");
  action("Email input filled")();

  const subjectInput = canvas.getByLabelText("Subject");
  await userEvent.type(subjectInput, "Inquiry");
  action("Subject input filled")();

  const messageTextarea = canvas.getByLabelText("Your Message");
  await userEvent.type(
    messageTextarea,
    "Hello, I would like to know more about your services."
  );
  action("Message input filled")();
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const DisabledForm = Template.bind({});
DisabledForm.args = {
  ...Default.args,
  disabled: true,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  ...Default.args,
  backgroundColor: "#282c34",
};
