import { Theme } from "@mui/material";

const so = {
  tagText: "#9cc3db",
  tagBorder: "#4a6187",
  mutedText: "#838c95",
  border: "#3e3e52",
};

const styles = (theme: Theme) => {
  return {
    skillsContainer: {
      padding: "64px 96px",
      width: "100%",
      justifyContent: "center",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down("md")]: {
        padding: "64px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "64px 16px",
      },
      alignItems: "center",
      flexDirection: "column" as const,
    },

    headerRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    },

    soLogo: {
      width: 32,
      height: 32,
    },

    typeAnimation: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: theme.palette.text.secondary,
      display: "inline-block",
      fontSize: "28px",
      lineHeight: "1.3",
      marginBottom: 0,
      letterSpacing: "0px",
      fontWeight: 600,
    },

    subtitle: {
      color: theme.palette.text.primary,
      fontSize: "14px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      paddingLeft: "44px",
    },

    toolbarRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "800px",
      marginBottom: "20px",
      gap: "16px",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column" as const,
        alignItems: "stretch",
      },
    },

    searchInput: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "13px",
      // backgroundColor: theme.palette.background.paper,
      borderRadius: "6px",
      color: theme.palette.text.secondary,
      "& .MuiOutlinedInput-root": {
        height: "36px",
        "& fieldset": {
          borderColor: theme.palette.primary.main
        },
        "&:hover fieldset": {
          borderColor: so.tagBorder,
        },
        "&.Mui-focused fieldset": {
          borderColor: so.tagText,
        },
      },
      "& .MuiInputBase-input": {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: "13px",
        color: theme.palette.text.secondary,
        padding: "8px 12px",
        "&::placeholder": {
          color: so.mutedText,
          opacity: 1,
        },
      },
      "& .MuiInputAdornment-root": {
        color: so.mutedText,
      },
      width: "320px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },

    sortGroup: {
      display: "flex",
      border: `1px solid ${theme.palette.background.paper}`,
      borderRadius: "6px",
      overflow: "hidden",
    },

    sortBtn: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      fontWeight: 400,
      textTransform: "capitalize" as const,
      color: theme.palette.text.primary,
      backgroundColor: "transparent",
      padding: "6px 14px",
      borderRadius: 0,
      minWidth: "auto",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.05)",
      },
    },

    sortBtnActive: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "capitalize" as const,
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      padding: "6px 14px",
      borderRadius: 0,
      minWidth: "auto",
      "&:hover": {
        backgroundColor: theme.palette.background.paper,
      },
    },

    tagsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      width: "100%",
      maxWidth: "800px",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },

    tagCard: {
      border: `1px solid ${theme.palette.primary.light}`,
      borderRadius: "6px",
      padding: "16px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
    },

    tagPill: {
      display: "inline-flex",
      alignSelf: "flex-start",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "4px",
      padding: "4px 8px",
    },

    tagPillText: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      color: theme.palette.text.secondary,
      fontWeight: 400,
    },

    tagMeta: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    tagQuestions: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      color: theme.palette.text.secondary,
    },
  };
};

export default styles;
