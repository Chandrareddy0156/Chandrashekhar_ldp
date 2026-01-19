import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

type Props = ButtonProps;

const Button = ({ children, ...props }: Props) => {
  return (
    <MuiButton
      variant="outlined"
      color="primary"
      disableElevation
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
    </MuiButton>
  );
};

export default Button;


