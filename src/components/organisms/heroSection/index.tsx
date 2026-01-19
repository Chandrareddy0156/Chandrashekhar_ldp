

import { Box, Container, Stack } from "@mui/material";
import HeroText from "../../molecules/heroText";
import HeroCTA from "../../molecules/heroCTA/index";
import heroImage from "../../../assets/middle/side.png"


const HeroSection = () => {
  return (
    <Box className="hero-root">
      <Container 
        
        sx={{ 
          display:'flex',
          justifyContent:'flex-end' ,
          width:'100%',
          ml:'200px'
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
        >
          {/* LEFT */}
          <Stack spacing={4} maxWidth={480}>
            <HeroText />
            <HeroCTA />
          </Stack>

          {/* RIGHT */}
          <Box className="hero-right">
            <Box className="hero-bg" />
            <Box
              sx={{width:'787px',height:'484px',p:'2x'}}
              component="img"
              src={heroImage}
              alt="Blinkist App"
              className="hero-image"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;

