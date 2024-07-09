import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    journeyContainer: {
      padding: "64px 96px",
      width: "100%",
      height: "max-content",
      flexDirection: "column",
      gap: "1",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)",
      [theme.breakpoints.down("md")]: {
        padding: "64px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "64px 16px",
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
