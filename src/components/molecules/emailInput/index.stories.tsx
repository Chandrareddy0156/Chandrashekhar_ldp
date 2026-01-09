import type { Meta, StoryObj } from "@storybook/react";
import { EmailPasswordForm } from ".";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof EmailPasswordForm> = {
  title: "Molecules/EmailPasswordForm",
  component: EmailPasswordForm
};

export default meta;

type Story = StoryObj<typeof EmailPasswordForm>;



export const LoginForm: Story = {
  render: () => (
    <Box
      sx={{
        width: 296,
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        p: 3,
        backgroundColor: "#FFFFFF"
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 700, mb: 3 }}
      >
        Log in to Blinkist
      </Typography>

      <EmailPasswordForm
        onSubmit={(data) => {
          console.log("Login data:", data);
        }}
      />
    </Box>
  )
};

