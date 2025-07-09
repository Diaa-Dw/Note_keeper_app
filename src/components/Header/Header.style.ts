import { styled } from "@mui/joy/styles";
import { Box } from "@mui/joy";

export const StyledHeader = styled(Box)(() => ({
  padding: "1.5rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const LogoLink = styled(Box)(({ theme }: StyledProp) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: theme.vars.palette.text.primary,
  fontSize: "3rem",
  transition: "color 0.3s ease",
  textDecoration: "none",
  cursor: "pointer",
  "& svg": {
    fontSize: "3rem",
    color: theme.vars.palette.text.primary,
  },
  "&:hover": {
    color: theme.vars.palette.text.primary,
    textDecoration: "none",
  },
}));

export const AvatarBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
