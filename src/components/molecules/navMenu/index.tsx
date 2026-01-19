import { Stack } from "@mui/material";
import NavItem from "../navItem";

const NavMenu = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
    >
      <NavItem label="Explore" />
      <NavItem label="For business" />
    </Stack>
  );
};

export default NavMenu;
