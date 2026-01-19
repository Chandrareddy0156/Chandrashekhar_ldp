import { Button as MuiButton } from "@mui/material";
import type { SxProps, Theme } from "@mui/system";

interface ButtonProps {
  label: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Button = ({
  label,
  variant = "contained",
  size = "medium",
  disabled,
  fullWidth,
  onClick,
  sx,
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={sx}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
