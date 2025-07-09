import { styled } from "@mui/joy/styles";
import { ModalDialog } from "@mui/joy";

export const StyledModalDialog = styled(ModalDialog)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));
