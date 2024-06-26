import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    closeIconPosition: {
      position: "absolute",
      right: "12px",
      top: "12px",
      cursor: "pointer",
    },
    dialogContent: {
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        padding: "12px 0",
      },
    },
    responseContainer: {
      width: "70%",
      backgroundColor: "black",
      borderRadius: "8px",
      overflowY: "auto",
      maxHeight: "71vh",
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.light,
      },
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    responseBox: {
      minHeight: "71vh",
      flexDirection: "column",
      flexWrap: "nowrap",
      padding: "24px",
      gap: "16px",
      [theme.breakpoints.down("sm")]: {
        padding: "12px",
      },
    },
    dialogTitle: { justifyContent: "center", paddingTop: "24px" },
    dialogBox: {
      flexDirection: "column",
      justifyContent: "center",
      width: "70%",
      color: theme.palette.text.secondary,
    },
  };
};
export default styles;
