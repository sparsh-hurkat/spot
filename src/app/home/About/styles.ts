import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    aboutContainer: {
      padding: "64px 96px",
      width: "100vw",
      justifyContent: "center",
      gap: "1",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      marginBottom: "90px",
      [theme.breakpoints.down("md")]: {
        padding: "64px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "64px 16px",
      },
    },

    sectionLayout: {
      width: "75vw",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
    },

    typeAnimation: {
      fontFamily: "Akshar, sans-serif",
      color: theme.palette.text.secondary,
      display: "inline-block",
      fontSize: "60px",
      lineHeight: ".8",
      marginBottom: "64px",
      letterSpacing: "1px",
    },

    aboutContent: {
      gap: "32px",
      [theme.breakpoints.down("md")]: { flexDirection: "column" },
    },

    image: {
      width: "100%",
      height: "100%",
      maxWidth: "450px",
      maxHeight: "450px",
      borderRadius: "12px",
    },
  };
};

export default styles;
