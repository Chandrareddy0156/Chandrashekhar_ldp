// src/components/organisms/SocialLoginSection/SocialLoginSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { SocialLoginSection } from "./index";

const meta: Meta<typeof SocialLoginSection> = {
  title: "Organisms/SocialLoginSection",
  component: SocialLoginSection,
};

export default meta;

type Story = StoryObj<typeof SocialLoginSection>;

export const Default: Story = {
  args: {},
};
