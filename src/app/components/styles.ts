import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    projectCardContainer: {
      borderRadius: "8px",
      width: "650px",
      height: "500px",
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        height: "400px",
        width: "300px",
      },
    },
    cardContainer: {
      maxWidth: "400px",
      minWidth: "200px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: `1px 1px 1px 1px ${theme.palette.text.primary}`,
      padding: "8px",
      paddingLeft: "16px",
      borderRadius: "8px",
      color: theme.palette.text.primary,
    },
    carousel: {
      width: "90%",
      height: "400px",
      margin: "0 auto",
    },
    video: {
      width: "100%",
      backgroundColor: theme.palette.common.white,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    accordion: {
      backgroundColor: theme.palette.background.default,
      backgroundImage: "none",
      boxShadow: "none",
    },
    descrptionText: {
      [theme.breakpoints.down("sm")]: { fontSize: "9px" },
    },
    journeyTitle: {
      [theme.breakpoints.down("sm")]: { fontSize: "12px" },
    },
  };
};

export default styles;
