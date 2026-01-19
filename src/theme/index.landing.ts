import { createTheme } from "@mui/material/styles";

export const landingTheme = createTheme({
  /* ======================
     COLOR SYSTEM
  ====================== */
  palette: {
    mode: "light",

    primary: {
      main: "#2CE080", // CTA green
      dark: "#1FC76A",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#0A6CF1", // Hero blue
    },

    text: {
      primary: "#03314B", // Heading
      secondary: "#6D787E", // Body text
    },

    background: {
      default: "#FFFFFF",
    },
  },

  /* ======================
     TYPOGRAPHY SYSTEM
  ====================== */
  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#03314B",
    },

    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.25,
      color: "#03314B",
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#6D787E",
    },

    body2: {
      fontSize: "0.9rem",
      color: "#6D787E",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },

  /* ======================
     GLOBAL SHAPE
  ====================== */
  shape: {
    borderRadius: 8,
  },

  /* ======================
     COMPONENT OVERRIDES
  ====================== */
  components: {
    /* ----- BUTTON ----- */
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          paddingLeft: 24,
          paddingRight: 24,
          // borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#2CE080",
          "&:hover": {
            backgroundColor: "#1FC76A",
          },
        },
      },
    },

    /* ----- APP BAR (HEADER) ----- */
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 72,
        },
      },
    },

//     /* ======================
//        HERO SECTION STYLES
//     ====================== */
//     MuiBox: {
//       variants: [
//         /* HERO ROOT */
//         {
//           props: { className: "hero-root" },
//           style: {
//             position: "relative",
//             overflow: "hidden",
//             paddingTop: 80,
//             paddingBottom: 80,
//           },
//         },

//         /* HERO RIGHT CONTAINER */
//         {
//           props: { className: "hero-right" },
//           style: {
//             position: "relative",
//             width: 520,
//             height: 420,
//           },
//         },

//         /* HERO BLUE BACKGROUND */
//         {
//           props: { className: "hero-bg" },
//           style: {
//             position: "absolute",
//             top: -120,
//             right: -180,
//             width: 650,
//             height: 650,
//             backgroundColor: "#0A6CF1",
//             borderRadius: "50%",
//             zIndex: 1,
//           },
//         },

//         /* HERO IMAGE */
//         {
//           props: { className: "hero-image" },
//           style: {
//             position: "absolute",
//             top: 40,
//             right: 40,
//             width: 260,
//             zIndex: 2,
//           },
//         },
//       ],
//     },
  },
 });


