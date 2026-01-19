import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcon } from ".";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof SocialIcon> = {
  title: "Atoms/SocialIcon",
  component: SocialIcon
};

export default meta;

type Story = StoryObj<typeof SocialIcon>;




export const FacebookLogin: Story = {
  render: () => (
    <Box
      sx={{
        width: 296,
        height: 42,
        border: "1px solid #E0E0E0",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 2
      }}
    >
      <SocialIcon platform="facebook" />
      <Typography fontWeight={600}>
        Login
      </Typography>
    </Box>
  )
};




export const GoogleLogin: Story = {
  render: () => (
    <Box
      sx={{
        width: 296,
        height: 42,
        border: "1px solid #E0E0E0",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 2
      }}
    >
      <SocialIcon platform="google" />
      <Typography fontWeight={600}>
        Login
      </Typography>
    </Box>
  )
};



export const AppleLogin: Story = {
  render: () => (
    <Box
      sx={{
        width: 296,
        height: 42,
        border: "1px solid #E0E0E0",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 2
      }}
    >
      <SocialIcon platform="apple" />
      <Typography fontWeight={600}>
        Continue with Apple
      </Typography>
    </Box>
  )
};




export const HeaderIcons: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 2 }}>
      <SocialIcon platform="facebook" />
      <SocialIcon platform="google" />
      <SocialIcon platform="apple" />
    </Box>
  )
};

