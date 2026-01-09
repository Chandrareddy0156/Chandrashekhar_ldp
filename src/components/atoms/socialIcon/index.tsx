

// src/components/atoms/SocialIcon/SocialIcon.tsx
import React from "react";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

interface SocialIconProps {
  platform: "facebook" | "google" | "apple";
}

export const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
  switch (platform) {
    case "facebook":
      return (
        <Box
          sx={{
            width: 24,
            height: 24,
            color: "#1877F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FacebookIcon fontSize="small" />
        </Box>
      );

    case "google":
      return (
        <Box
          sx={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "left",
            justifyContent: "left"
          }}
        >
          <GoogleIcon fontSize="small" />
        </Box>
      );

    case "apple":
      return (
        <Box
          sx={{
            width: 24,
            height: 24,
            color: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <AppleIcon fontSize="small" color="success" />
        </Box>
      );

    default:
      return null;
  }
};

