import { CssVarsProvider, GlobalStyles } from "@mui/joy";
import { AppThemeProviderProps } from "./AppThemeProvider.type";
import globalStyles from "./globalStyles";
import theme from "./theme";

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <CssVarsProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      {children}
    </CssVarsProvider>
  );
};

export default AppThemeProvider;
