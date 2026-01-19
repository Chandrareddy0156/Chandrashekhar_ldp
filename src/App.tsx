import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { router } from "./components/router";

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
