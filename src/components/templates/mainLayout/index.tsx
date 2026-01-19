import { Box } from "@mui/material";
import Sidebar from "../../organisms/sideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F8FA",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      
      <Box
        sx={{
          mt: 3, 
          ml: 3, 
        }}
      >
        <Sidebar />
      </Box>

 
      <Box
        sx={{
          flex: 1,
          mt: 3,
          ml: 4,
          mr: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
