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
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../../contexts/Auth/useAuth";
import ProfileModal from "../../pages/Dashboard/components/ProfileModal";
import { UserMenuPorps } from "./UserMenu.type";

const UserMenu = ({ username }: UserMenuPorps) => {
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();
  const dispatch = useAuthDispatch();

  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    Cookies.remove("jwt");
    navigate("/login");
    dispatch({ type: "LOGOUT" });
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
          <MenuItem color='danger' onClick={onLogout}>
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
