import type { Meta, StoryObj } from "@storybook/react";
import Typography from ".";
import { Box } from "@mui/material";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
    color: {
      control: "select",
      options: [
        "initial",
        "inherit",
        "primary",
        "secondary",
        "text.primary",
        "text.secondary",
        "error",
      ],
    },
    align: {
      control: "radio",
      options: ["inherit", "left", "center", "right", "justify"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body1",
    children: "This is default typography text.",
  },
};

export const Headings: Story = {
  render: () => (
    <Box>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h2">Heading H2</Typography>
      <Typography variant="h3">Heading H3</Typography>
      <Typography variant="h4">Heading H4</Typography>
      <Typography variant="h5">Heading H5</Typography>
      <Typography variant="h6">Heading H6</Typography>
    </Box>
  ),
};

export const BodyText: Story = {
  render: () => (
    <Box>
      <Typography variant="body1">
        Body1 – Used for main content text across the application.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Body2 – Used for secondary or helper text.
      </Typography>
    </Box>
  ),
};

export const CaptionAndOverline: Story = {
  render: () => (
    <Box>
      <Typography variant="caption">
        Caption text for hints or metadata
      </Typography>
      <Typography variant="overline">
        Overline text example
      </Typography>
    </Box>
  ),
};

export const TextAlignment: Story = {
  args: {
    variant: "body1",
    align: "center",
    children: "This text is center aligned.",
  },
};
