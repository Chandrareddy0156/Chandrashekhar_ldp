/** @jsxRuntime classic */
/** @jsx React.createElement */
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "../src/components/Button/index.theme.tsx";

export const decorators = [
  (Story: React.ComponentType) => (
    <ThemeProvider theme={Theme}>
     <
    </ThemeProvider>
  ),
];
