import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    titleContainer: {
      alignItems: "center",
      padding: "96px",
      minHeight: "100vh",
      width: "100%",
      justifyContent: "center",
      gap: "1",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down("sm")]: {
        padding: "32px",
        paddingTop: "64px",
      },
    },
    letters: {
      color: theme.palette.text.secondary,
      display: "inline-block",
      fontSize: "110px",
      padding: "16px 0",
      lineHeight: ".8",
      [theme.breakpoints.down("sm")]: {
        fontSize: "80px",
      },
    },
    subheader: {
      fontFamily: "Akshar, sans-serif",
      color: theme.palette.text.primary,
      letterSpacing: "1px !important",
      fontSize: "20px",
    },
    topHeader: {
      color: theme.palette.text.primary,
    },
  };
};

export default styles;
