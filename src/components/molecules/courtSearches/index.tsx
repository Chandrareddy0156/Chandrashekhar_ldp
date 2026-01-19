
import { Box } from "@mui/material";
import Typography from "../../atoms/typography";

export type SearchStatus = "CLEAR" | "CONSIDER" | "PENDING";

interface StatusRowProps {
  searchName: string;
  status: SearchStatus;
  date: string;
}

export const StatusRow = ({ searchName, status, date }: StatusRowProps) => (
  <Box sx={{ display: "flex", py: 1 }}>
    <Typography sx={{ flex: 1 }} variant="body2">
      {searchName}
    </Typography>

    <Typography
      sx={{
        flex: 1,
        fontWeight: 600,
        color:
          status === "CLEAR"
            ? "success.main"
            : status === "CONSIDER"
            ? "warning.main"
            : "text.secondary",
      }}
      variant="body2"
    >
      {status}
    </Typography>

    <Typography sx={{ flex: 1 }} variant="body2">
      {date}
    </Typography>
  </Box>
);
