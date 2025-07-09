import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { Typography } from "@mui/joy";
import { useAuthState } from "../../contexts/Auth/useAuth";
import UserMenu from "../UserMenu";
import { LogoLink, StyledHeader } from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthState();

  const onLogoClick = () => {
    const navigateTo = isAuthenticated ? "/" : "/login";
    navigate(navigateTo);
  };

  return (
    <StyledHeader component={"header"}>
      <LogoLink onClick={onLogoClick}>
        <ImportContactsRoundedIcon />
        <Typography component='h1' level='h1'>
          NoteKeeper
        </Typography>
      </LogoLink>
      {isAuthenticated && user && <UserMenu username={user?.username} />}
    </StyledHeader>
  );
};

export default Header;
