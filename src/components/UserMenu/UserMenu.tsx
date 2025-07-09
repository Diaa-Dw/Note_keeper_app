import { AccountCircle, DarkMode, Logout, Sunny } from "@mui/icons-material";
import {
  Avatar,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/joy";
import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import ProfileModal from "../../pages/Dashboard/components/ProfileModal";
import { UserMenuPorps } from "./UserMenu.type";

const UserMenu = ({ username }: UserMenuPorps) => {
  const [openProfile, setOpenProfile] = useState(false);
  const { mode, setMode } = useColorScheme();
  const logoutMutation = useLogout();

  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const onLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <Dropdown>
        <MenuButton variant='plain'>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Avatar alt={username} color='primary' variant='solid' size='lg' />
            <Typography level='h3' component={"h3"}>
              {username}
            </Typography>
          </Stack>
        </MenuButton>

        <Menu>
          <MenuItem onClick={() => setOpenProfile(true)}>
            <AccountCircle />
            Profile
          </MenuItem>
          <MenuItem onClick={handleThemeToggle}>
            {mode === "light" ? <DarkMode /> : <Sunny />}
            Theme
          </MenuItem>
          <MenuItem
            color='danger'
            onClick={onLogout}
            disabled={logoutMutation.isPending}
          >
            <Logout />
            Logout
          </MenuItem>
        </Menu>
      </Dropdown>

      <ProfileModal open={openProfile} onClose={() => setOpenProfile(false)} />
    </>
  );
};

export default UserMenu;
