import {
  selectRole,
  selectRoles,
  selectUser,
} from "@/redux/features/AuthSlice";
import { useAppSelector } from "@/redux/store";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { Ref, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  "&:hover": {
    backgroundColor: theme.palette.info.dark,
  },
}));

export const UserButtons = () => {
  const user = useAppSelector(selectUser);
  const roles = useAppSelector(selectRoles);
  const role = useAppSelector(selectRole);

  const anchorElement = useRef<HTMLDivElement>();

  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleCloseSetting = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      <div
        ref={anchorElement as Ref<HTMLDivElement>}
        style={{ marginLeft: "auto", marginRight: "15px" }}
      >
        <ButtonGroup variant="contained">
          <UserButton id="profile-button" onClick={handleProfileClick}>
            <Typography>{user?.email}</Typography>
          </UserButton>
          <UserButton
            id="settings-button"
            aria-controls={settingsOpen ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={settingsOpen ? "true" : undefined}
            onClick={handleToggleSettings}
          >
            <SettingsIcon />
          </UserButton>
        </ButtonGroup>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={settingsOpen}
        onClose={handleCloseSetting}
        MenuListProps={{
          "aria-labelledby": "settings-button",
        }}
        sx={{ marginTop: 1 }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="select-role-label">Role</InputLabel>
          <Select
            labelId="select-role-label"
            id="select-role"
            value={role!}
            label="Role"
            // onChange={}
          >
            {roles?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Menu>
    </>
  );
};

export default UserButtons;
