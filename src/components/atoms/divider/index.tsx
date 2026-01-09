import { Box, Typography } from "@mui/material";

interface DividerProps {
  text?: string;
}

export const Divider = ({ text = "or" }: DividerProps) => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "1px",
          backgroundColor: "#E0E0E0",
          width: "120px",
        }}
      />

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6D787E",
          fontWeight: 400,
          textTransform: "lowercase",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          flex: 1,
          height: "1px",
          backgroundColor: "#E0E0E0",
          width: "120px",
        }}
      />
    </Box>
  );
};
