import type { Theme } from "@mui/joy/styles";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
declare global {
  interface StyledProp {
    theme: Theme;
  }

  type Register = UseFormRegister;
  type Validation = RegisterOptions;
}
