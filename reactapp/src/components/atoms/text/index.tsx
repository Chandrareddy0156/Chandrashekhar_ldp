import { Typography } from "@mui/material";

interface SidebarTextProps {
  label: string;
}

export const SidebarText = ({ label }: SidebarTextProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
      }}
    >
      {label}
    </Typography>
  );
};
