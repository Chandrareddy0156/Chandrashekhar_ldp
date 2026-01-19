// atoms/Button/PrimaryButton.tsx
import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
import {Button} from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    fullWidth
    variant="contained"
    {...props}
    sx={{
      height: "40px",
    backgroundColor: "#2CE080",
      color: "#03314B",
      fontWeight: 600,
      textTransform:'none',
      ...(props.sx),
    }}
  >
    {children}
  </Button>
);
