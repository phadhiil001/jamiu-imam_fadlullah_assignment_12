import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './Header';
import { HeaderProps } from './Header.types';
import { userEvent, within } from '@storybook/test';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: 'color' },
    isVisible: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: 'Home', url: '#home', disabled: false },
    { label: 'About', url: '#about', disabled: false },
    { label: 'Skills', url: '#skills', disabled: false },
    { label: 'Projects', url: '#projects', disabled: false },
    { label: 'Contact', url: '#contact', disabled: false },
  ],
  backgroundColor: '#1a1a1a',
  isVisible: true,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByTestId('navbar-link-0');
  await userEvent.click(homeLink);
  action('Home link clicked')();
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};