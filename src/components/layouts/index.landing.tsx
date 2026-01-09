import { ThemeProvider, CssBaseline } from "@mui/material";
import {landingTheme } from "../../theme/index.landing";


interface LoginLayoutProps {
    children: React.ReactNode;
  }
  

export const LandingLayout = ({ children }: LoginLayoutProps) => (
  <ThemeProvider theme={landingTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

