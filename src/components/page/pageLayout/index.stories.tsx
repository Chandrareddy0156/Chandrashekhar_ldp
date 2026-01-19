// src/pages/LandingPage.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import LandingPage from ".";

const meta: Meta<typeof LandingPage> = {
  title: "Pages/LandingPage",
  component: LandingPage,
};

export default meta;

type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {},
};
