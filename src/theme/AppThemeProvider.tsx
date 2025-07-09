import { CssVarsProvider, GlobalStyles } from "@mui/joy";
import {
  ThemeProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { AppThemeProviderProps } from "./AppThemeProvider.type";
import globalStyles from "./globalStyles";
import theme from "./theme";
import materialTheme from "./matrialTheme";

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <CssVarsProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        {children}
      </CssVarsProvider>
    </ThemeProvider>
  );
};

export default AppThemeProvider;
