import { Box, styled } from "@mui/joy";

export const LoginWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  padding: "0 2rem",
}));

export const LoginCard = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  boxShadow: theme.shadow.lg,
  padding: "2.5rem",
  borderRadius: "12px",
  textAlign: "center",
}));

export const RightAlignedLinkWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});
