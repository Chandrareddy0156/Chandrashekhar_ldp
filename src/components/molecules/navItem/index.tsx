import { Typography } from "@mui/material"

type Props = {
  label: string;
  onClick?: () => void;
};

const NavItem = ({ label, onClick }: Props) => {
  return (
    <Typography
      variant="body1"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        fontWeight: 500,
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {label}
    </Typography>
  );
};

export default NavItem;
