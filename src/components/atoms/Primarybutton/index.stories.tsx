import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof PrimaryButton> = {
  title: "Atoms/Button/PrimaryButton",
  component: PrimaryButton
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;



export const LandingPageCTA: Story = {
  args: {
    children: "Start free trial"
  }
};



export const LoginSubmitButton: Story = {
  args: {
    children: "Log in with email"
  }
};








export const InsideFormLayout: Story = {
  render: () => (
    <Box sx={{ width: 296 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Continue to access Blinkist
      </Typography>
      <PrimaryButton>
        Continue
      </PrimaryButton>
    </Box>
  )
};

