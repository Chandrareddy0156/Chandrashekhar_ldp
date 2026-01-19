import { Chip } from "@mui/material";

interface StatusChipProps {
  label: "CLEAR" | "CONSIDER";
}

export const StatusChip = ({ label }: StatusChipProps) => {
  return (
    <Chip
      label={label}
      size="small"
      color={label === "CLEAR" ? "success" : "warning"}
    />
  );
};
