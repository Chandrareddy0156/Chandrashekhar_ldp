// src/components/organisms/LoginForm/LoginForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./index";

const meta: Meta<typeof LoginForm> = {
  title: "Organisms/LoginForm",
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
};
