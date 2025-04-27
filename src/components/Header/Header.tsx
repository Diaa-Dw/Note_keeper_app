import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { Typography } from "@mui/joy";
import { useAuthState } from "../../contexts/Auth/useAuth";
import UserMenu from "../UserMenu";
import { LogoLink, StyledHeader } from "./Header.style";

const Header = () => {
  const { user, isAuthenticated } = useAuthState();

  return (
    <StyledHeader component={"header"}>
      <LogoLink to={"/"}>
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
