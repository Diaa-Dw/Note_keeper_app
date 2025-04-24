import { Avatar, Typography } from "@mui/joy";
import { AvatarBox, LogoLink, StyledHeader } from "./Header.style";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { useAuthState } from "../../contexts/Auth/useAuth";

const Header = () => {
  const { user, isAuthenticated } = useAuthState();
  const profileImage = user?.photo;
  console.log("🚀 ~ Header ~ user:", user);
  return (
    <StyledHeader component={"header"}>
      <LogoLink href='/'>
        <ImportContactsRoundedIcon />
        <Typography component='h1' level='h1'>
          NoteKeeper
        </Typography>
      </LogoLink>
      <AvatarBox>
        {isAuthenticated && (
          <Avatar src={profileImage} alt={user?.username} size='lg' />
        )}
        <Typography>{user?.username}</Typography>
      </AvatarBox>
    </StyledHeader>
  );
};

export default Header;
