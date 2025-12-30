import { Box, List, Paper, Typography } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Paper
      sx={{
        width: 320,
        height: "100vh",
        bgcolor: "#201F24",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box display="flex" alignItems="center" gap={2} mb={6}>
          <Box
            component="img"
            src="/assets/icons/seedericon.png"
            sx={{ width: 28, height: 28 }}
          />
          <Typography variant="h5" color="#E8E7F0">
            Seeder
          </Typography>
        </Box>

        <List disablePadding>
          <List disablePadding>
            
            <ListItemButton  >
              <ListItemIcon>
                <Box
                  component="img"
                  src="/assets/icons/home.png"
                  alt="Home"
                  sx={{ width: 20, height: 20 }}
                />
              </ListItemIcon>

              <ListItemText primary="Home" />
            </ListItemButton>

           
            <ListItemButton >
              <ListItemIcon>
                <Box
                  component="img"
                  src="/assets/icons/cash.png"
                  alt="Cash"
                  sx={{ width: 20, height: 20 }}
                />
              </ListItemIcon>

              <ListItemText primary="Cash Acceleration" />
            </ListItemButton>
          </List>
        </List>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Box
          component="img"
          src="/assets/icons/flash.png"
          sx={{ width: 18, height: 18 }}
        />
        <Typography variant="body2" color="#E8E7F0" >
          Watch how to
        </Typography>
      </Box>
    </Paper>
  );
}
