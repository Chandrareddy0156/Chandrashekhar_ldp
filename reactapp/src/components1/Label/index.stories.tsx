import type { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    text: {
      control: "text",
    },
    htmlFor: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
  },
};

export const Required: Story = {
  args: {
    text: "Email",
    required: true,
  },
};
