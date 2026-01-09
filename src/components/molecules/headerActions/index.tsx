import { Stack, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderActions = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <SearchIcon />
      </IconButton>

      <Button variant="text">
        Log in
      </Button>
    </Stack>
  );
};

export default HeaderActions;
