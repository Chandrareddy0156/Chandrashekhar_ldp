
import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;



export const StartFreeTrial: Story = {
  args: {
    children: "Start free trial",
    color: "primary",
    size: "large"
  }
};

export const HeaderLogin: Story = {
  args: {
    children: "Log in",
    color: "inherit",
    variant: "text"
  }
};

export const ForBusiness: Story = {
  args: {
    children: "For business",
    color: "inherit",
    variant: "text",
    
  }
};




export const FacebookLogin: Story = {
  args: {
    children: "Login",
    fullWidth: true,
    sx: {
      backgroundColor: "#1877F2",
      color: "#fff",
      
    }
  }
};

export const GoogleLogin: Story = {
  args: {
    children: "Login",
    fullWidth: true,
    sx: {
      backgroundColor: "#FFFFFF",
      color: "#000",
      border: "1px solid #E0E0E0",
      
    }
  }
};

export const AppleLogin: Story = {
  args: {
    children: "Continue with Apple",
    fullWidth: true,
    sx: {
      backgroundColor: "#000",
      color: "#fff",
     
    }
  }
};




export const LoginWithEmail: Story = {
  args: {
    children: "Log in with email",
    fullWidth: true,
    color: "primary"
  }
};

export const ForgotPassword: Story = {
  args: {
    children: "Forgot your password?",
    variant: "text",
    color: "primary"
  }
};

