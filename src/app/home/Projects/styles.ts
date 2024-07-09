import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    projectsContainer: {
      padding: "64px 96px",
      width: "100vw",
      justifyContent: "center",
      gap: "1",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
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
  };
};

export default styles;
