import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  const github = {
    bg: theme.palette.mode === 'dark' ? '#0d1117' : '#ffffff',
    cardBg: theme.palette.mode === 'dark' ? '#161b22' : '#f6f8fa',
    border: theme.palette.mode === 'dark' ? '#30363d' : '#d0d7de',
    blue: theme.palette.mode === 'dark' ? '#58a6ff' : '#0969da',
    text: theme.palette.mode === 'dark' ? '#c9d1d9' : '#24292f',
    textSecondary: theme.palette.mode === 'dark' ? '#8b949e' : '#57606a',
  };

  return {
    projectsContainer: {
      padding: "80px 96px",
      width: "100vw",
      justifyContent: "center",
      backgroundColor: github.bg,
      color: github.text,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
      [theme.breakpoints.down("md")]: {
        padding: "64px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "48px 24px",
      },
    },

    sectionLayout: {
      gap: "16px",
      width: "80vw",
      maxWidth: "1200px",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        width: "90vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },

    headerRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    },

    githubLogo: {
      fontSize: "2rem",
      color: github.text,
    },

    typeAnimation: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
      color: github.text,
      display: "inline-block",
      fontSize: "32px",
      lineHeight: "1.25",
      marginBottom: 0,
      letterSpacing: "-0.5px",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "28px",
      },
    },

    subtitle: {
      color: github.textSecondary,
      fontSize: "1rem",
      fontWeight: 400,
    },

    // Search row
    searchRow: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 2,
      mb: 0,
      pb: 0,
    },

    searchBar: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      border: `1px solid ${github.border}`,
      borderRadius: "6px",
      padding: "5px 12px",
      gap: 1,
      flex: 1,
      "&:focus-within": {
        borderColor: github.blue,
        boxShadow: `0 0 0 3px ${github.blue}33`,
      },
    },

    searchIcon: {
      color: github.textSecondary,
      fontSize: "1rem",
    },

    searchInput: {
      color: github.text,
      fontSize: "0.875rem",
      flex: 1,
      "& input": {
        padding: 0,
        "&::placeholder": {
          color: github.textSecondary,
          opacity: 1,
        },
      },
    },

    // Main two-column layout
    mainContent: {
      display: "flex",
      width: "100%",
      mt: 0,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },

    // Year sidebar
    yearSidebar: {
      width: "160px",
      minWidth: "160px",
      pt: 4,
      pr: 4,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        minWidth: "100%",
        pr: 0,
        pt: 3,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 1,
        pb: 2,
        borderBottom: `1px solid ${github.border}`,
      },
    },

    yearItem: {
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      color: github.textSecondary,
      fontSize: "0.875rem",
      fontWeight: 400,
      mb: 0.5,
      userSelect: "none",
      "&:hover": {
        color: github.text,
        backgroundColor: theme.palette.mode === 'dark' ? '#21262d' : '#f3f4f6',
      },
      [theme.breakpoints.down("md")]: {
        mb: 0,
      },
    },

    yearItemActive: {
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      color: "#ffffff",
      backgroundColor: "#388bfd",
      fontSize: "0.875rem",
      fontWeight: 600,
      mb: 0.5,
      userSelect: "none",
      "&:hover": {
        backgroundColor: "#1f6feb",
      },
      [theme.breakpoints.down("md")]: {
        mb: 0,
      },
    },

    // Repo list container
    repoListContainer: {
      flex: 1,
      borderLeft: `1px solid ${github.border}`,
      pl: 4,
      [theme.breakpoints.down("md")]: {
        borderLeft: "none",
        pl: 0,
        pt: 2,
      },
    },

    // Individual repo item (GitHub list style — no card, separated by lines)
    repoItem: {
      py: "24px",
      borderBottom: `1px solid ${github.border}`,
      "&:first-of-type": {
        borderTop: `1px solid ${github.border}`,
      },
    },

    repoItemHeader: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      mb: 1,
      gap: 2,
    },

    repoItemTitleRow: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      flexWrap: "wrap",
    },

    repoItemName: {
      fontSize: "1rem",
      fontWeight: 600,
      color: github.blue,
      cursor: "pointer",
      lineHeight: 1.5,
      "&:hover": {
        textDecoration: "underline",
      },
    },

    visibilityBadge: {
      backgroundColor: "transparent",
      border: `1px solid ${github.border}`,
      borderRadius: "2em",
      color: github.textSecondary,
      fontSize: "0.75rem",
      fontWeight: 500,
      height: "20px",
      "& .MuiChip-label": {
        padding: "0 7px",
        lineHeight: "18px",
      },
    },

    starButton: {
      color: github.text,
      border: `1px solid ${github.border}`,
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: 500,
      padding: "3px 12px",
      minWidth: "auto",
      textTransform: "none",
      backgroundColor: "transparent",
      flexShrink: 0,
      "& .MuiButton-startIcon": {
        marginRight: "4px",
        "& svg": {
          fontSize: "0.875rem !important",
        },
      },
      "&:hover": {
        backgroundColor: theme.palette.mode === 'dark' ? '#21262d' : '#f3f4f6',
        borderColor: github.textSecondary,
      },
    },

    repoItemDesc: {
      color: github.textSecondary,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      mb: "12px",
      maxWidth: "640px",
    },

    repoItemMeta: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
      mb: "12px",
    },

    langDot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      display: "inline-block",
      flexShrink: 0,
    },

    metaText: {
      color: github.textSecondary,
      fontSize: "0.75rem",
    },

    languageBar: {
      height: "8px",
      borderRadius: "4px",
      overflow: "hidden",
      maxWidth: "200px",
      display: "flex",
    },

    emptyState: {
      color: github.textSecondary,
      textAlign: "center",
      mt: 6,
      fontSize: "0.875rem",
    },

    // Modal Styles (GitHub README viewer)
    modalPaper: {
      backgroundColor: github.cardBg,
      border: `1px solid ${github.border}`,
      borderRadius: "12px",
      maxHeight: "90vh",
    },

    modalHeader1: {
      padding: "16px 24px",
      borderBottom: `1px solid ${github.border}`,
      backgroundColor: github.cardBg,
    },

    modalHeader2: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: github.cardBg,
    },

    modalTitle: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: github.text,
    },

    closeButton: {
      color: github.textSecondary,
      "&:hover": {
        backgroundColor: github.bg,
      },
    },

    modalContent: {
      backgroundColor: github.cardBg,
      color: github.text,
      padding: "24px !important",
      overflow: "visible"
    },

    modalImageContainer: {
      width: "100%",
      mb: 3,
      borderRadius: "6px",
      overflow: "hidden",
      border: `1px solid ${github.border}`,
      backgroundColor: github.bg,
    },

    modalImage: {
      width: "100%",
      height: "auto",
      maxHeight: "400px",
      objectFit: "contain",
      display: "block",
    },

    readmeContent: {
      color: github.text,
      fontSize: "1rem",
      lineHeight: 1.6,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',

      "& p": {
        marginBottom: "16px",
        color: github.text,
      },

      "& h1, & h2, & h3, & h4, & h5, & h6": {
        marginTop: "24px",
        marginBottom: "16px",
        fontWeight: 600,
        lineHeight: 1.25,
        color: github.text,
        borderBottom: theme.palette.mode === 'dark' ? `1px solid ${github.border}` : 'none',
        paddingBottom: "8px",
      },

      "& h1": { fontSize: "2em" },
      "& h2": { fontSize: "1.5em" },
      "& h3": { fontSize: "1.25em" },
      "& h4": { fontSize: "1em" },
      "& h5": { fontSize: "0.875em" },
      "& h6": { fontSize: "0.85em" },

      "& ul, & ol": {
        marginTop: "0",
        marginBottom: "16px",
        paddingLeft: "2em",
      },

      "& li": {
        marginBottom: "4px",
        "&::marker": {
          color: github.textSecondary,
        },
      },

      "& strong": {
        fontWeight: 600,
        color: github.text,
      },

      "& code": {
        padding: "0.2em 0.4em",
        margin: "0",
        fontSize: "85%",
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110,118,129,0.4)' : 'rgba(175,184,193,0.2)',
        borderRadius: "6px",
        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
      },

      "& pre": {
        padding: "16px",
        overflow: "auto",
        fontSize: "85%",
        lineHeight: 1.45,
        backgroundColor: theme.palette.mode === 'dark' ? '#161b22' : '#f6f8fa',
        borderRadius: "6px",
        border: `1px solid ${github.border}`,
        marginBottom: "16px",

        "& code": {
          padding: 0,
          margin: 0,
          fontSize: "100%",
          backgroundColor: "transparent",
          border: "none",
        },
      },

      "& blockquote": {
        padding: "0 1em",
        color: github.textSecondary,
        borderLeft: `0.25em solid ${github.border}`,
        margin: "0 0 16px 0",
      },

      "& a": {
        color: github.blue,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },

    dateBadge: {
      backgroundColor: "transparent",
      border: `1px solid ${github.border}`,
      borderRadius: "2em",
      color: github.textSecondary,
      fontSize: "1rem",
      fontWeight: 500,
      height: "20px",
      "& .MuiChip-label": {
        padding: "0 14px",
        lineHeight: "18px",
      },
    },

    projectLink: {
      color: github.blue,
      textDecoration: "none",
      fontSize: "0.875rem",
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      "&:hover": {
        textDecoration: "underline",
      },
      "& strong": {
        fontWeight: 600,
      },
    },
  };
};

export default styles;
