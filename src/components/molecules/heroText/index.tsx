import { Stack,Typography } from "@mui/material";


const HeroText = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Fit learning into
        <br />
        your life
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Blinkist brings you knowledge from top nonfiction and podcasts,
        so you can learn anytime, anywhere.
      </Typography>
    </Stack>
  );
};

export default HeroText;
