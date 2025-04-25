import { styled } from "@mui/joy/styles";
import { CircularProgress } from "@mui/joy";

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
}));
