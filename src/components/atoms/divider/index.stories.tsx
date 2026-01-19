import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";
import { Box } from "@mui/material";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "Text displayed between the divider lines",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    text: "or",
  },
};

export const WithCustomText: Story = {
  args: {
    text: "continue with",
  },
};

export const InFormContext: Story = {
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <Divider {...args} />
    </Box>
  ),
  args: {
    text: "or sign in with",
  },
};
