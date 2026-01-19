

import type { Meta, StoryObj } from "@storybook/react";
import Container from ".";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container
};

export default meta;

type Story = StoryObj<typeof Container>;




export const LandingPageSection: Story = {
  args: {
    children: (
      <Box
        sx={{
          py: 8,
          backgroundColor: "#F7F8FA"
        }}
      >
        <Typography variant="h3" gutterBottom>
          Fit learning into your life
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 500 }}>
          Blinkist brings you knowledge from top nonfiction and podcasts, so
          you can learn anytime, anywhere.
        </Typography>
      </Box>
    )
  }
};



export const LoginFormWrapper: Story = {
  args: {
    maxWidth: "xs",
    children: (
      <Box
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: 2,
          p: 4,
          backgroundColor: "#FFFFFF"
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Log in to Blinkist
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">Email</Typography>
          <Box sx={{ height: 40, border: "1px solid #E0E0E0", mt: 1 }} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Password</Typography>
          <Box sx={{ height: 40, border: "1px solid #E0E0E0", mt: 1 }} />
        </Box>
      </Box>
    )
  }
};




export const FullWidthContent: Story = {
  args: {
    maxWidth: false,
    children: (
        <Typography variant="h5">
          Choose what fits you, how it fits you
        </Typography>
    
    )
  }
};

