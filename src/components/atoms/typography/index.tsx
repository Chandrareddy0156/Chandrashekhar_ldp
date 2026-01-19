import { Typography as MuiTypography } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";

type Props = TypographyProps;

const Typography = ({ children, ...props }: Props) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
