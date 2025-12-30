import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
  argTypes: {
    onClick: { action: "button-clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click me",
    variant: "contained",
  },
};

export const Primary: Story = {
  args: {
    variant: "contained",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
