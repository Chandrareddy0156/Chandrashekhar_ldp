import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#fdfdffff",
      paper: "#201F24",
    },

    primary: {
      main: "#7C6CF6",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#9A9AA2",
    },

    divider: "#2A2930",
  },

  typography: {
    fontFamily: "Inter, system-ui, sans-serif",

    h5: {
      fontSize: "22px",
      fontWeight: 700,
      letterSpacing: "0.3px",
    },

    body2: {
      fontSize: "15px",
      fontWeight: 500,
      color: "#A5A5A6",
    },

    button: {
      fontSize: "15px",
      fontWeight: 600,
      textTransform: "none",
      justifyContent: "flex-start",
    },
  },

 

  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          padding: "14px 18px",
          marginBottom: "1px",
          color: "#9A9AA2",
          gap: "8px",

          "&:hover": {
            backgroundColor: "#2C2B31",
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36,
          color: "inherit",
        },
      },
    },
    MuiListItemText: {
        styleOverrides: {
          primary: {
            color: "#E8E7F0",
          },
        },
      },
  },
});
    

export default Theme;
