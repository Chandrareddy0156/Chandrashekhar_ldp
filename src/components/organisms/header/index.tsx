import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,

  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../molecules/logo";
import { Link as RouterLink } from "react-router-dom";


const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: "1px solid #E0E0E0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: 1000,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Box display="flex" alignItems="center" gap={4}>
          <Logo />

          <IconButton sx={{ color: "#03314B" }}>
            <SearchIcon />
          </IconButton>

          <Typography
            variant="body1"
            component="div"
            sx={{ color: "#03314B", cursor: "pointer" }}
          >
            Explore
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#03314B", fontSize: "14px", fontWeight: 400 }}
          >
            For business
          </Link>

          <Link
            sx={{ color: "#03314B", textTransform: "none", fontWeight: 400 }}
            component={RouterLink}
            to="/login"
            underline="none"
          >
            Log in
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
