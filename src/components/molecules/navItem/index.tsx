import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export const NavItem = ({ icon, label, active }: NavItemProps) => (
  <ListItemButton
    sx={{
      borderRadius: "8px",
      mb: 0.5,
      bgcolor: active ? "#E8EAF6" : "transparent",
    }}
  >
    <ListItemIcon
      sx={{ color: active ? "#2248E2" : "inherit", minWidth: 40 }}
    >
      {icon}
    </ListItemIcon>

    <ListItemText
      primary={label}
      slotProps={{
        primary: {
          sx: {
            fontSize: 14,
            fontWeight: active ? 600 : 400,
          },
        },
      }}
    />
  </ListItemButton>
);
