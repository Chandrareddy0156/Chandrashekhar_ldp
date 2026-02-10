import { ListItemButton, ListItemIcon } from "@mui/material";
import { SidebarText } from "../../atoms/text";
import { SidebarIcon } from "../../atoms/icon";

interface NavItemProps {
  label: string;
  iconPath: string;
  active?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  label,
  iconPath,
  active,
  onClick,
}: NavItemProps) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        bgcolor: active ? "#3A3A3F" : "transparent",
        "&:hover": {
          bgcolor: "#3A3A3F",
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 36 }}>
        <SidebarIcon src={iconPath} alt={label} />
      </ListItemIcon>

      <SidebarText label={label} />
    </ListItemButton>
  );
};
