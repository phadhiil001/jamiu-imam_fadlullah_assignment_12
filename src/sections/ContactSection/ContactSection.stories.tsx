import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactSection from "./ContactSection";
import { ContactSectionProps } from "./ContactSection.types";
import { userEvent, within } from "@storybook/test";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    image: "./images/first.png",
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

export const DisabledForm = Template.bind({});
DisabledForm.args = {
  ...Default.args,
  disabled: true,
};

DisabledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Trying to fill inputs to ensure they are disabled
  const nameInput = canvas.getByLabelText("Your Name");
  await userEvent.type(nameInput, "Fadlullah Jamiu-Imam");
  action("Attempt to fill Name input")();

  const phoneInput = canvas.getByLabelText("Phone Number");
  await userEvent.type(phoneInput, "1234567890");
  action("Attempt to fill Phone input")();

  const emailInput = canvas.getByLabelText("Email");
  await userEvent.type(emailInput, "fadlu@fadlu.com");
  action("Attempt to fill Email input")();

  const subjectInput = canvas.getByLabelText("Subject");
  await userEvent.type(subjectInput, "Inquiry");
  action("Attempt to fill Subject input")();

  const messageTextarea = canvas.getByLabelText("Your Message");
  await userEvent.type(
    messageTextarea,
    "Hello, I would like to know more about your services."
  );
  action("Attempt to fill Message input")();
};
