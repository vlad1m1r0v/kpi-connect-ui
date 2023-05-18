import css from "./MainLayout.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { sidebarWidth } from "@/shared/consts/ui";
import MainHeader from "@/shared/components/headers/MainHeader";
import { Sidebar, SidebarHeader } from "@/shared/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleSidebar } from "@/modules/ui/slice";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${sidebarWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainLayoutWrapper = styled(Box)(() => ({
  backgroundColor: "#f7f7f8",
  display: "flex",
}));

export default function MainLayout() {
  const open = useSelector((state: RootState) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  const handleSidebarOpen = () => dispatch(toggleSidebar());

  return (
    <MainLayoutWrapper>
      <CssBaseline />
      <MainHeader open={open} handleClick={handleSidebarOpen} />
      <Sidebar open={open} handleClose={handleSidebarOpen} />
      <Main open={open}>
        <SidebarHeader />
        <div className={css.container}></div>
        <Outlet />
      </Main>
    </MainLayoutWrapper>
  );
}
