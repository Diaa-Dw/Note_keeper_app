import { styled } from "@mui/joy/styles";
import { Box } from "@mui/joy";

export const DashboardContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
}));

export const ActionsBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
}));



