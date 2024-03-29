import { sidebarWidth } from "@/consts/ui";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import ListItems from "../ListItems/ListItems";
import { Typography } from "@mui/material";

const SidebarHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Sidebar: React.FC<Props> = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <SidebarHeader>
        <Typography variant="h6" sx={{ marginRight: "auto", paddingLeft: 2 }}>
          Features
        </Typography>
        <IconButton onClick={handleClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </SidebarHeader>
      <ListItems />
    </Drawer>
  );
};

export { SidebarHeader, Sidebar };
