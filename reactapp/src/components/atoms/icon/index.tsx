import { Box } from "@mui/material";

interface SidebarIconProps {
  src: string;
  alt?: string;
}

export const SidebarIcon = ({ src, alt }: SidebarIconProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: 20,
        height: 20,
        opacity: 0.9,
      }}
    />
  );
};
