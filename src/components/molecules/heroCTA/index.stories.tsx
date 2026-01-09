import type { Meta, StoryObj } from "@storybook/react";
import HeroCTA from ".";
import { Box } from "@mui/material";

const meta: Meta<typeof HeroCTA> = {
  title: "Molecules/HeroCTA",
  component: HeroCTA,
};

export default meta;

type Story = StoryObj<typeof HeroCTA>;




export const HeroSectionCTA: Story = {
  render: () => (
    <Box
      sx={{
        maxWidth: "400px",
        mt: 3,
        color:'#2CE080'
      }}
    >
      <HeroCTA />
    </Box>
  ),
};
