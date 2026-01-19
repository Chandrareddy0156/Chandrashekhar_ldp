import { Box } from "@mui/material";
import Header from "../../organisms/header";

const LandingTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default LandingTemplate;
