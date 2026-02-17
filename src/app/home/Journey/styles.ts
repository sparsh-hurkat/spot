import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    journeyContainer: {
      padding: "64px 96px",
      width: "100%",
      height: "max-content",
      flexDirection: "column" as const,
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down("md")]: {
        padding: "64px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "64px 16px",
      },
      alignItems: "center"
    },

    headerRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    },

    linkedinLogo: {
      width: 32,
      height: 32,
      borderRadius: "4px",
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
      color: theme.palette.text.secondary,
      fontSize: "14px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      paddingLeft: "44px",
    },

    card: {
      backgroundColor: theme.palette.background.default,
      borderRadius: "8px",
      width: "100%",
      maxWidth: "800px",
      overflow: "hidden",
    },

    cardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px",
      paddingBottom: 0
    },

    cardHeaderTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "20px",
      fontWeight: 600,
      color: theme.palette.text.secondary,
    },

    cardHeaderIcon: {
      color: theme.palette.text.primary,
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.08)",
      },
    },

    itemRow: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      padding: "16px",
    },

    companyLogo: {
      width: 56,
      height: 56,
      borderRadius: "4px",
      objectFit: "contain" as const,
      backgroundColor: "#ffffff",
      padding: "2px",
      flexShrink: 0,
    },

    experienceTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "16px",
      color: theme.palette.text.secondary,
      fontWeight: 600,
      lineHeight: 1.3,
    },

    experienceRole: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "14px",
      color: theme.palette.text.secondary,
      fontWeight: 400,
      lineHeight: 1.4,
    },

    experienceDuration: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      color: theme.palette.text.primary,
      fontWeight: 400,
      lineHeight: 1.4,
    },

    experienceLocation: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "12px",
      color: theme.palette.text.primary,
      fontWeight: 400,
      lineHeight: 1.4,
    },

    experienceDescription: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "13px",
      color: theme.palette.text.secondary,
      lineHeight: 1.6,
      marginTop: "8px",
      "& p": {
        margin: 0,
      },
      "& a": {
        color: "#70b5f9",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      "& strong": {
        color: theme.palette.text.secondary,
        fontWeight: 600,
      },
    },

    showMoreTextBtn: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "13px",
      color: theme.palette.text.secondary,
      textTransform: "none" as const,
      padding: 0,
      minWidth: "auto",
      marginTop: "4px",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
      },
    },

    divider: {
      borderColor: theme.palette.primary.light,
    },

    showAllBtn: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: "14px",
      color: theme.palette.text.primary,
      textTransform: "none" as const,
      fontWeight: 600,
      width: "100%",
      justifyContent: "center",
      padding: "12px",
      borderRadius: "0 0 8px 8px",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.08)",
        color: theme.palette.text.secondary,
      },
    },
  };
};

export default styles;
