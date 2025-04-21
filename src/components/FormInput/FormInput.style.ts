import { FormControl, Input, styled } from "@mui/joy";

export const StyledFormControl = styled(FormControl)(() => ({
  margin: "8px 0px",
}));

export const StyledInput = styled(Input)(({ theme }: StyledProp) => ({
  borderRadius: "4px",
  padding: "1rem",
  outline: "none",
  fontSize: "1.4rem",

  "&:focus": {
    border: `10px solid ${theme.vars.palette.primary.solidBg}`,
  },
}));
