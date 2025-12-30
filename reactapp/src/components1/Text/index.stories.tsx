import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: 'radio',
      options: ['normal', 'bold'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default text paragraph.',
    as: 'p',
    size: 'md',
  },
};

export const Heading: Story = {
  args: {
    children: 'This is a Heading (h1)',
    as: 'h1',
    size: 'xl',
    weight: 'bold',
  },
};

export const Bold: Story = {
  args: {
    children: 'This text is bold.',
    weight: 'bold',
  },
};

export const Colored: Story = {
  args: {
    children: 'This text has a custom color.',
    color: '#eb4034',
  },
};
