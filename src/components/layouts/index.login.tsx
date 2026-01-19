import { ThemeProvider, CssBaseline } from "@mui/material";
import { loginTheme } from "../../theme/index";
import type { PropsWithChildren } from "react";

export const LoginLayout = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={loginTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
