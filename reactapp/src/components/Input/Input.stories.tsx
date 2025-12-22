import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "number", "password"],
    },
    placeholder: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email",
  },
};
export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};
export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
  },
};
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};
