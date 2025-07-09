import { Box, styled } from "@mui/joy";

export const StyledNotesContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "16px",
  flexGrow: 1,
  margin: "2rem 0",
}));

export const PaginationContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));
