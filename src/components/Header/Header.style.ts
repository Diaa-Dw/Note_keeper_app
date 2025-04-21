import { styled } from "@mui/joy/styles";
import { Box, Link } from "@mui/joy";

export const StyledHeader = styled(Box)(() => ({
  padding: "1.5rem 2rem",
  display: "flex",
  alignItems: "center",
}));

export const LogoLink = styled(Link)(({ theme }: StyledProp) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: theme.vars.palette.text.primary,
  fontSize: "3rem",
  transition: "color 0.3s ease",
  textDecoration: "none",
  "& svg": {
    color: theme.vars.palette.text.primary,
  },
  "&:hover": {
    color: theme.vars.palette.text.primary,
    textDecoration: "none",
  },
}));
