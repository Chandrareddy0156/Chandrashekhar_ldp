import { ThemeProvider } from "@mui/material/styles";
import Seeder from "../Seeder.jsx/Seeder";
import Theme from "../Seeder.jsx/Seeder.theme";

function Gallery() {
  return (
    <ThemeProvider theme={Theme}>
      <Seeder />
    </ThemeProvider>
  );
}

export default Gallery;
