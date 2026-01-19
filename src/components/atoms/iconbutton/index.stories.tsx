


import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton
};

export default meta;

type Story = StoryObj<typeof IconButton>;



export const HeaderIcons: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 2 }}>
      <IconButton>
        <SearchIcon />
      </IconButton>

      <IconButton>
        <Typography fontSize={14}>Log in</Typography>
      </IconButton>
    </Box>
  )
};



export const SocialLoginIcons: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 1 }}>
      <IconButton
        sx={{
          backgroundColor: "#1877F2",
          color: "#fff",
          borderRadius: 1,
          width: 48,
          height: 40,
          "&:hover": { backgroundColor: "#166FE5" }
        }}
      >
        <FacebookIcon fontSize="small" />
      </IconButton>

      <IconButton
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: 1,
          width: 48,
          height: 40
        }}
      >
        <GoogleIcon fontSize="small" />
      </IconButton>
    </Box>
  )
};




export const AppleLoginIcon: Story = {
  render: () => (
    <IconButton
      sx={{
        width: "100%",
        height: 40,
        border: "1px solid #E0E0E0",
        borderRadius: 1,
        display: "flex",
        gap: 1
      }}
    >
      <AppleIcon />
      <Typography fontSize={14}>Continue with Apple</Typography>
    </IconButton>
  )
};

