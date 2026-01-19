import {
    GridViewOutlined,
    PersonOutline,
    GavelOutlined,
    DescriptionOutlined,
    BarChartOutlined,
    ManageAccountsOutlined,
    BadgeOutlined,
  } from "@mui/icons-material";
  import React from "react";
  

  export interface NavItemType {
    label: string;
    icon: React.ReactNode;
    active?: boolean;
  }
  
  export const navItems: NavItemType[] = [
    {
      label: "Home",
      icon: <GridViewOutlined />,
    },
    {
      label: "Candidates",
      icon: <PersonOutline />,
      active: true,
    },
    {
      label: "Adverse Actions",
      icon: <GavelOutlined />,
    },
    {
      label: "Logs",
      icon: <DescriptionOutlined />,
    },
    {
      label: "Analytics",
      icon: <BarChartOutlined />,
    },
    {
      label: "Account",
      icon: <ManageAccountsOutlined />,
    },
    {
      label: "Screenings",
      icon: <BadgeOutlined />,
    },
  ];
  