import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    backgroundColor: "gray",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    backgroundColor: "blue",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
