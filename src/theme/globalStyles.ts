const globalStyles = {
  "*": { padding: 0, margin: 0, boxSizing: "border-box" },
  html: { fontSize: "62.5%" },
  body: {
    minHeight: "100vh",
    fontSize: "1.6rem",
    color: "var(--joy-palette-text-tertiary)",
    backgroundColor: "var(--joy-palette-background-body)",
  },
  "#root": {
    maxWidth: "1240px",
    minHeight: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  a: {
    color: "var(--joy-palette-primary-plainColor)",
    transition: "all .2s ease-in",
    "&:hover": {
      color: "var(--joy-palette-primary-solidBg)",
    },
  },
  "input:-webkit-autofill": {
    boxShadow: "0 0 0 1000px var(--joy-palette-background-body) inset",
  },
};

export default globalStyles;
