import {Box,Typography,List,ListItemButton,ListItemIcon,ListItemText,} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOn";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

export default function Seeder() {
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        bgcolor: "background.default",
        px: 3,
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
     
      <Box>
       
        <Box display="flex" alignItems="center" gap={2} mb={6}>
          <BrandingWatermarkIcon color="primary" />
          <Typography variant="h5" color="white">Seeder</Typography>
        </Box>


        <List disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton >
            <ListItemIcon>
              <PriceCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Cash Acceleration" />
          </ListItemButton>
        </List>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <FlashOnOutlinedIcon color="warning" />
        <Typography variant="body2">Watch how to</Typography>
      </Box>
    </Box>
  );
}
