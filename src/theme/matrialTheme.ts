import { createTheme } from "@mui/material/styles";
import theme from "./theme";

export const materialTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#00af81",
        },
        text: {
          primary: "#08192d",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#53D4BA",
        },
        text: {
          primary: "#E0E0E0",
        },
      },
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          color: theme.vars.palette.text.primary,

          fontSize: "2rem",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          color: theme.vars.palette.text.primary,
          "&.Mui-selected": {
            backgroundColor: theme.vars.palette.primary,
            color: theme.vars.palette.text.primary,
          },
        },
      },
    },
  },
});

export default materialTheme;
