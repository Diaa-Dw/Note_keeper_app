import {
  Avatar,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
  useColorScheme,
} from "@mui/joy";
import { AvatarBox, LogoLink, StyledHeader } from "./Header.style";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { useAuthDispatch, useAuthState } from "../../contexts/Auth/useAuth";
import { AccountCircle, DarkMode, Logout, Sunny } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { mode, setMode } = useColorScheme();
  const { user, isAuthenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    Cookies.remove("jwt");
    navigate("/login");
    dispatch({ type: "LOGOUT" });
  };

  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const profileImage = user?.photo;
  return (
    <StyledHeader component={"header"}>
      <LogoLink to={"/"}>
        <ImportContactsRoundedIcon />
        <Typography component='h1' level='h1'>
          NoteKeeper
        </Typography>
      </LogoLink>

      <Dropdown>
        <MenuButton variant='plain'>
          <AvatarBox>
            {isAuthenticated && (
              <Avatar
                src={profileImage}
                alt={user?.username}
                variant='solid'
                size='lg'
              />
            )}
            <Typography level='h3' component={"h3"}>
              {user?.username}
            </Typography>
          </AvatarBox>
        </MenuButton>

        <Menu>
          <MenuItem>
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
    </StyledHeader>
  );
};

export default Header;
