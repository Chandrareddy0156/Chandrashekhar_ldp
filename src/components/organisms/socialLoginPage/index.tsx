import { Box } from "@mui/material";
import { SocialLoginButton } from "../../molecules/socialLoginPage";

export const SocialLoginSection = () => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Box display="flex" gap={2}>
      <SocialLoginButton platform="facebook" />
      <SocialLoginButton platform="google" />
    </Box>
    <SocialLoginButton platform="apple"  />
  </Box>
);
