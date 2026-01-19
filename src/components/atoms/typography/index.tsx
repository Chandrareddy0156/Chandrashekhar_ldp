import { Typography as MuiTypography } from "@mui/material";
import type { SxProps, Theme } from "@mui/system";
import type { ReactNode } from "react";

export type ComponentType =
  | "captionHeader"
  | "sectionTitle"
  | "body";

interface TextProps {
  children: ReactNode;
  variant?: 
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption";
  fontWeight?: number | string;
  color?: string;
  componentType?: ComponentType;
  sx?: SxProps<Theme>;
}

const Text = ({
  children,
  variant = "body1",
  fontWeight,
  color,
  componentType,
  sx,
}: TextProps) => {
  const componentStyles: SxProps<Theme> =
    componentType === "captionHeader"
      ? { fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }
      : componentType === "sectionTitle"
      ? { fontSize: 16, fontWeight: 700 }
      : {};

  return (
    <MuiTypography
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      sx={{ ...componentStyles, ...sx }}
    >
      {children}
    </MuiTypography>
  );
};

export default Text;
