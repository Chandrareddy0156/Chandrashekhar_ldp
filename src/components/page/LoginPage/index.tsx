// pages/LoginPage.tsx
import { Grid } from "@mui/material";
import { LoginTemplate } from "../../templates/loginTemplate";

export default function LoginPage() {
  return (
    <Grid
      container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <LoginTemplate />
    </Grid>
  );
}
