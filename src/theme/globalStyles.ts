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
    textDecoration: "inherit",
    color: "var(--joy-palette-primary-plainColor)",
    "&:hover": {
      color: "var(--joy-palette-primary-plainHoverColor)",
    },
  },
  "input:-webkit-autofill": {
    boxShadow: "0 0 0 1000px var(--joy-palette-background-body) inset",
  },
};

export default globalStyles;
