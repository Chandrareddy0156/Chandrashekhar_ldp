import { Box } from "@mui/material";
import blinkistLogo from "../../../assets/logo/blinkist.png";

type Props = {
  onClick?: () => void;
};

const Logo = ({ onClick }: Props) => {
  return (
    <Box
      component="img"
      src={blinkistLogo}
      alt="Blinkist"
      onClick={onClick}
      sx={{
        width:124,
        height:70,
      
        cursor: "pointer",
      }}
    />
  );
};

export default Logo;
