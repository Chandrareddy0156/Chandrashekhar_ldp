// src/components/atoms/Logo/Logo.stories.tsx
// import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const Clickable: Story = {
  args: {
    onClick: () => alert("Logo clicked!"),
  },
};
