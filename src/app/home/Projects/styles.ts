import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    projectsContainer: {
      padding: "64px 96px",
      width: "100vw",
      justifyContent: "center",
      gap: "1",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
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
    projectImage: {
      textAlign: "center",
      height: "400px",
      [theme.breakpoints.down("md")]: {
        height: "300px",
        marginBottom: "32px",
      },
    },
  };
};

export default styles;
