import { CssVarsProvider, GlobalStyles } from "@mui/joy";
import {
  createTheme,
  ThemeProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { AppThemeProviderProps } from "./AppThemeProvider.type";
import globalStyles from "./globalStyles";
import theme from "./theme";

const materialTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#00af81",
        },
      },
    },
  },
});

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
