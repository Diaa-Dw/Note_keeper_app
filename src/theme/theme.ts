import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidColor: "#fefefe",
          solidBg: "#00af81",
          solidHoverBg: "#09926d",
        },
        neutral: {
          plainColor: "#08192d",
          plainHoverColor: "#0d1a3d",
          outlinedBorder: "#e4e4e7",
        },
        danger: {
          solidBg: "#ef4444",
        },
        background: {
          body: "#fefefe",
          surface: "#fefefe",
          level1: "#f5f5f5",
        },
        text: {
          primary: "#09090b",
          secondary: "#6b7280",
          tertiary: "#08192d",
        },
        divider: "#e4e4e7",
      },
    },
    dark: {
      palette: {
        primary: {
          solidColor: "#08192d",
          solidBg: "#53D4BA",
          solidHoverBg: "#00af81",
        },
        neutral: {
          plainColor: "#fefefe",
          plainHoverColor: "#e4e4e7",
          outlinedBorder: "#3f3f46",
        },
        danger: {
          solidBg: "#ef4466",
        },
        background: {
          body: "#0a192f",
          surface: "#111827",
          level1: "#1f2937",
        },
        text: {
          primary: "#fefefe",
          secondary: "#9ca3af",
          tertiary: "#cbd5e1",
        },
        divider: "#3f3f46",
      },
    },
  },
  fontFamily: {
    body: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    "body-lg": {
      fontSize: "1.8rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    "body-md": {
      fontSize: "1.6rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    "body-sm": {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "4px",
          padding: ".7rem",
          fontSize: "1.4rem",
          color: theme.vars.palette.text.primary,
          "&.Mui-focused": {
            "--Input-focusedHighlight": theme.vars.palette.primary.solidBg, // your custom color here
          },
          "& input:-webkit-autofill": {
            boxShadow: `0 0 0px 1000px ${theme.vars.palette.background.surface} inset`,
            WebkitBoxShadow: `0 0 0px 1000px ${theme.vars.palette.background.surface} inset`,
            border: "0 !important",
            outline: "0 !important",
            backgroundClip: "content-box !important",
            filter: "none !important",
            WebkitTextFillColor: theme.vars.palette.text.primary,
          },
        }),
        endDecorator: {
          "& svg": {
            fontSize: "1.6rem",
          },
        },
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: () => ({
          fontSize: "1.2rem",
        }),
      },
    },
    JoyButton: {
      styleOverrides: {
        root: () => ({
          transition: "background .3s ease-in",
          fontSize: "1.4rem",
        }),
      },
    },
    JoyFormHelperText: {
      styleOverrides: {
        root: () => ({
          fontSize: "1.4rem",
          color: theme.vars.palette.danger.solidBg,
        }),
      },
    },
  },
});

export default theme;
