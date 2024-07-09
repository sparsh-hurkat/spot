import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    journeyCardBox: {
      borderRadius: "8px",
      width: "650px",
      height: "500px",
      backgroundColor: theme.palette.background.default,
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        height: "500px",
        width: "300px",
      },
    },
    journeyCardContainer: {
      padding: "16px",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      height: "100%",
      "& .MuiAccordion-root:before": {
        display: "none",
      },
      "& .MuiAccordion-root": {
        color: theme.palette.text.primary,
      },
      "& .MuiAccordionSummary-root": {
        backgroundColor: theme.palette.background.default,
      },
      "& .MuiAccordionSummary-expandIconWrapper": {
        color: theme.palette.text.primary,
      },
      "& .MuiAccordionDetails-root": {
        backgroundColor: theme.palette.background.default,
      },
    },
    accordion: {
      backgroundColor: theme.palette.background.default,
      backgroundImage: "none",
      boxShadow: "none",
    },
    descrptionText: {
      [theme.breakpoints.down("sm")]: { fontSize: "10px" },
    },
    journeyTitle: {
      [theme.breakpoints.down("sm")]: { fontSize: "12px" },
    },
    video: {
      width: "100%",
      backgroundColor: theme.palette.common.white,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  };
};

export default styles;
