import type { Meta, StoryObj } from "@storybook/react";
import HeaderActions from ".";
import { Box } from "@mui/material";

const meta: Meta<typeof HeaderActions> = {
  title: "Molecules/HeaderActions",
  component: HeaderActions
};

export default meta;

type Story = StoryObj<typeof HeaderActions>;



export const LandingHeader: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        borderBottom: "1px solid #E0E0E0",
        backgroundColor: "#FFFFFF"
      }}
    >
      <HeaderActions />
    </Box>
  )
};

