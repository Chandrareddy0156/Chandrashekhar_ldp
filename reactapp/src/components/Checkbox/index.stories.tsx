import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index.tsx";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Accept Terms and Conditions",
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
export const Checked: Story = {
  args: {
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
