import type { Theme } from "@mui/joy/styles";

declare global {
  interface StyledProp {
    theme: Theme;
  }
}
