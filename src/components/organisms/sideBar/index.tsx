import { Box, List, Avatar, Divider } from "@mui/material";
import Text from "../../atoms/typography";
import { NavItem } from "../../molecules/navItem";
import { LogoutOutlined } from "@mui/icons-material";
import james from "../../../assets/james.jpg";
import { navItems } from "./index.data";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 238,
        height: 720,
        bgcolor: "#FFFFFF",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
        px: 2,
        py: 2.5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Text
        variant="h6"
        color="primary"
        fontWeight={700}
        sx={{ mb: 3, pl: 1 }}
      >
        RECRUIT
      </Text>

      {/* Navigation */}
      <List sx={{ p: 0 }}>
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </List>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ mb: 2 }} />

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 1,
        }}
      >
        <Avatar src={james} sx={{ width: 32, height: 32 }} />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Text
            variant="body2"
            fontWeight={600}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Chandra Reddy A
          </Text>
          <Text variant="caption" color="text.secondary">
            chandra.co
          </Text>
        </Box>

        <LogoutOutlined
          fontSize="small"
          sx={{ color: "#6B7280", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
