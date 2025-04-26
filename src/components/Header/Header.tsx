import { Avatar, Typography } from "@mui/joy";
import { AvatarBox, LogoLink, StyledHeader } from "./Header.style";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { useAuthState } from "../../contexts/Auth/useAuth";

const Header = () => {
  const { user, isAuthenticated } = useAuthState();
  const profileImage = user?.photo;
  return (
    <StyledHeader component={"header"}>
      <LogoLink to={"/"}>
        <ImportContactsRoundedIcon />
        <Typography component='h1' level='h1'>
          NoteKeeper
        </Typography>
      </LogoLink>
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
    </StyledHeader>
  );
};

export default Header;
