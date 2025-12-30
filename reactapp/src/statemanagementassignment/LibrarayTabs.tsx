import { Tabs, Tab, Box } from "@mui/material";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const LibraryTabs = ({ value, onChange }: Props) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
      <Tabs
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Currently reading" />
        <Tab label="Finished" />
      </Tabs>
    </Box>
  );
};

export default LibraryTabs;
