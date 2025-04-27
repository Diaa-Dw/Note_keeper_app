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
  "a.link": {
    fontSize: "1.2rem",
    textDecoration: "none",
    transition: "color .2s ease-in-out",
    "&:hover": {
      color: "var(--joy-palette-primary-solidBg)",
    },
  },
  "a.primary": {
    color: "var(--joy-palette-primary-solidHoverBg)",
  },
  "a.secondary": {
    color: "var(--joy-palette-text-secondary)",
  },

};

export default globalStyles;
