import { Sidebar, SidebarHeader } from "@/components/Sidebar";
import { MainHeader } from "@/components/headers";
import { sidebarWidth } from "@/consts/ui";
import { selectSidebar, toggleSidebar } from "@/redux/features/UISlice";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

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
    minHeight: "100%",
  }),
}));

const MainLayoutWrapper = styled(Box)(() => ({
  display: "flex",
}));

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default function MainLayout() {
  const { isOpen } = useSelector(selectSidebar);
  const dispatch = useDispatch();

  const handleSidebarOpen = () => dispatch(toggleSidebar());

  return (
    <MainLayoutWrapper>
      <CssBaseline />
      <MainHeader open={isOpen} handleClick={handleSidebarOpen} />
      <Sidebar open={isOpen} handleClose={handleSidebarOpen} />
      <Main open={isOpen}>
        <SidebarHeader />
        <Container>
          <Outlet />
        </Container>
      </Main>
    </MainLayoutWrapper>
  );
}
