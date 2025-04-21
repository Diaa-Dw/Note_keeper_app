import { Typography } from "@mui/joy";
import { LogoLink, StyledHeader } from "./Header.style";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";

const Header = () => {
  return (
    <StyledHeader component={"header"}>
      <LogoLink href='/'>
        <ImportContactsRoundedIcon />
        <Typography component='h1' level='h1'>
          NoteKeeper
        </Typography>
      </LogoLink>
    </StyledHeader>
  );
};

export default Header;
