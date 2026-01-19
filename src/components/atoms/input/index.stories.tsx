

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;




export const EmailInput: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email"
  }
};




export const PasswordInput: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password"
  }
};




export const InputWithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "name@example.com",
    helperText: "We'll never share your email."
  }
};




export const SearchInput: Story = {
  render: () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <SearchIcon />
      <Input placeholder="Search for titles, authors, topics" />
    </Box>
  )
};




export const ErrorState: Story = {
  args: {
    label: "Email",
    error: true,
    helperText: "Invalid email address"
  }
};

