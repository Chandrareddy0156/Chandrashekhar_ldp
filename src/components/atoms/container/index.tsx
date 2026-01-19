import { Container as MuiContainer } from "@mui/material";
import type { ContainerProps } from "@mui/material/Container";

type Props = ContainerProps;

const Container = ({ children, ...props }: Props) => {
  return (
    <MuiContainer maxWidth="lg" {...props}>
      {children}
    </MuiContainer>
  );
};

export default Container;
