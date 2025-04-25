import { styled } from "@mui/joy/styles";
import { Box, ModalDialog } from "@mui/joy";

export const StyledModalDialog = styled(ModalDialog)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const DialogHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
