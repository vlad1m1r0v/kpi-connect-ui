import UserButtons from "@/components/UserButtons";
import { sidebarWidth } from "@/consts/ui";
import useAuth from "@/hooks/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const MainHeaderContainer = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: `${sidebarWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Logo = styled("img")({
  width: "50px",
  marginRight: "10px",
  aspectRatio: "auto",
});

interface Props {
  open: boolean;
  handleClick: () => void;
}

const MainHeader: React.FC<Props> = ({ open, handleClick }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <MainHeaderContainer position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleClick}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Logo src="/logo.png" />
          <Typography variant="h5">KPI Connect</Typography>
          <UserButtons />
          <Button variant="contained" color="error" onClick={handleLogout}>
            <Typography sx={{ textTransform: "none" }}>Logout</Typography>
          </Button>
        </Toolbar>
      </MainHeaderContainer>
    </>
  );
};

export default MainHeader;
