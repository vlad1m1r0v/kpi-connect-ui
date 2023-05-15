import css from "./MainHeader.module.css";
import { Button, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { sidebarWidth } from "@/shared/consts/ui";
import MenuIcon from "@mui/icons-material/Menu";

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

interface Props {
  open: boolean;
  handleClick: () => void;
}

const MainHeader: React.FC<Props> = ({ open, handleClick }) => {
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
          <img src="logo.png" className={css.logo}></img>
          <Typography variant="h5">KPI Connect</Typography>
          <Button sx={{ marginLeft: "auto" }} variant="contained" color="error">
            <Typography>Logout</Typography>
          </Button>
        </Toolbar>
      </MainHeaderContainer>
    </>
  );
};

export default MainHeader;
