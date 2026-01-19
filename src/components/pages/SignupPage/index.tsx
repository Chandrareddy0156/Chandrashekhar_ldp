import { Box, Container, Grid } from "@mui/material";
import { SignUpForm } from "../../organisms/signUpForm";
import illustration from "../../../assets/illustration.svg";

const SignUpPage = () => (
  <Box
    minHeight="100vh"
    display="flex"
    alignItems="center"
    bgcolor="#eeeeee"
  >
    <Container maxWidth="xl">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={40} 
      >
      
        <Grid
          
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            src={illustration}
            sx={{
              width: "100%",
              maxWidth: 480,
            }}
          />
        </Grid>

        
        <Grid

          display="flex"
          justifyContent="center"
        >
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default SignUpPage;
