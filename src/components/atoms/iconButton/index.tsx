import { IconButton as MuiIconButton } from "@mui/material";
import type{ SxProps, Theme } from "@mui/system";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
}

const IconButton = ({ icon, onClick, size = "small", sx }: IconButtonProps) => {
  return (
    <MuiIconButton onClick={onClick} size={size} sx={sx}>
      {icon}
    </MuiIconButton>
  );
};

export default IconButton;
