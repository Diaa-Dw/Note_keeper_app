import type { Theme } from "@mui/joy/styles";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
declare global {
  interface StyledProp {
    theme: Theme;
  }

  interface WithChildren {
    children: React.ReactNode;
  }

  interface User {
    id: string;
    username: string;
    photo: string;
  }

  type Register = UseFormRegister;
  type Validation = RegisterOptions;
}
