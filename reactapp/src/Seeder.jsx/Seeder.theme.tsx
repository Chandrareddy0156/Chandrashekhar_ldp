import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#1C1C22",
    },

    primary: {
      main: "#7C6CF6",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#9A9AA2",
    },
  },

  typography: {
    fontFamily: "Inter, system-ui, sans-serif",

    h5: {
      fontSize: "22px",
      fontWeight: 700,
    },

    body2: {
      fontSize: "16px",
      color: "#9A9AA2",
    },

    button: {
      fontSize: "16px",
      textTransform: "none",
      justifyContent: "flex-start",
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: "18px",
            padding: "14px 18px",
            color: "#9A9AA2",
            gap: "1px",
          },
        },
      },
      
  },
});

export default theme;
