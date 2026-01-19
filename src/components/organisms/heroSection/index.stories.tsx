// src/components/organisms/HeroSection/HeroSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from ".";

const meta: Meta<typeof HeroSection> = {
  title: "Organisms/HeroSection",
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
