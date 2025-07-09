import { Box, styled } from "@mui/joy";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center",
  textAlign: "center",
  gap: "8px",
}));
