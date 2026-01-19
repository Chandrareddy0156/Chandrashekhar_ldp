import Button from "../../atoms/button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import type { JSX } from "react";
import type { SxProps, Theme } from "@mui/material/styles";



type SocialPlatform = "facebook" | "google" | "apple";

const ICONS: Record<SocialPlatform, JSX.Element> = {
  facebook: <FacebookIcon />,
  google: <GoogleIcon />,
  apple: <AppleIcon />,
};

const STYLES: Record<SocialPlatform, SxProps<Theme>> = {
  facebook: {
    backgroundColor: "#3A579D",
    color: "#FFFFFF",
    
    
  },
  google: {
    backgroundColor: "#4285F4",
    color: "#FFFFFF",
    

  },
  apple: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "2px solid #042330",
    width: "290px",
  },
};

interface SocialLoginButtonProps {
  platform: SocialPlatform;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  platform,
}) => {
  const text =
    platform === "apple" ? "Continue with Apple" : "Login";

  return (
    <Button
      variant="contained"
      startIcon={ICONS[platform]}
      fullWidth
      sx={{
        height: "40px",
        borderRadius: "1px",
        textTransform: "none",
        fontFamily:'Cera pro' ,
        fontWeight: 700,
        size:'14px',
       
        ...STYLES[platform],
      }}
    >
      {text}
    </Button>
  );
};
