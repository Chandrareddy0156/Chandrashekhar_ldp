import { createTheme } from "@mui/material/styles";

export const loginTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2CE080", 
      contrastText: "#03314B",
    },

    text: {
      primary: "#03314B",
      secondary: "#6D787E",
    },

    divider: "#E0E0E0",

    background: {
      default: "#F5F6F4",
      paper: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Cera Pro",

    h1: {
      fontSize: "24px",
      fontWeight: 700,
      textAlign: "center",
      width: "190px",
      height: "30px",
      lineHeight: "24px",
      color: "#03314B",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#03314B",
    },

    body2: {
      fontSize: "12px",
      fontWeight: 400,
      color: "#116BE9",
      textAlign: "center",
    },
  },

  components: {
    
    MuiButton: {
      styleOverrides: {
        root: {
          width: "140px",
          fontWeight: 600,
          border: "2px",
          
        },
        containedPrimary: {
          backgroundColor: "#3A579D",
          color: "white",
          textTransform:"none",
          
        },
      },
    },

    /* Inputs */
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "4px",
          fontSize: "14px",
          width: 296,
          
          
        },
       
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#6D787E",
          
        },
      },
    },

    /* Links */
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#116BE9",
          fontWeight: 400,
          textDecoration: "underline",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #E0E0E0",
          width: "392px",
          height: "656px",
          top: "122px",
          left: "524px",

          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#FFFFFF",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E0E0E0",
        },
      },
    },

  }
});

