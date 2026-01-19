import { IconButton as MuiIconButton } from "@mui/material";
import type { IconButtonProps } from "@mui/material/IconButton";

type Props = IconButtonProps;

const IconButton = ({ children, ...props }: Props) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
