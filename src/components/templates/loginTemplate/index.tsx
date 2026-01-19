import { Paper, Typography, Box } from "@mui/material";
import { SocialLoginSection } from "../../organisms/socialLoginPage";
import { LoginForm } from "../../organisms/loginForm";
import { Divider } from "../../atoms/divider";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


export const LoginTemplate = () => (
  <Paper
    elevation={0}
    sx={{
      width: 392,
      minHeight: 500,
      position: "absolute",
      border: "1px solid #E0E0E0",
      px: 4,
      py: 4,
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Link to="/">
    <IconButton
      aria-label="Close login"
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
        color: "#6D787E",
      }}
      
    >
      <CloseIcon fontSize="medium" />
    </IconButton>
    </Link>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // margin:'20px',
        padding: "20px",
        width: "100%",
        gap: 3,
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          marginTop: 2,
          fontFamily: "Cera Pro",
        }}
      >
        Log in to Blinkist
      </Typography>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
    

        <SocialLoginSection />
        
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Divider text="or" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <LoginForm />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#116BE9",
            cursor: "pointer",
          }}
        >
          Forgot your password?
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            color: "#6D787E",
            textAlign: "center",
            lineHeight: 1.6,
            px: 1,
          }}
        >
          By continuing you indicate that you've read and agree to our{" "}
          <Box
            component="span"
            sx={{
              color: "#000",
              textDecoration: "underline",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Terms of Service
          </Box>{" "}
          and{" "}
          <Box
            component="span"
            sx={{
              color: "#000",
              textDecoration: "underline",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Box>
          .
        </Typography>
      </Box>

    </Box>



    <Box >
      <Typography
        sx={{
          width: "392px",
          height: "31px",
          fontSize: "16px",
          fontWeight: 400,
          color: "#116BE9",
          cursor: "pointer",
          display: "flex",

          justifyContent: "center",
        }}
      >
        You don't have an account?
      </Typography>
    </Box>
  </Paper>
);
