import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    mainContainer: {
      width: "100%",
      height: "max-content",
    },
    xAxis: {
      borderRadius: "4px",
      minWidth: "200px",
      width: "85%",
      height: "12px",
      backgroundColor: theme.palette.background.default,
      zIndex: 1,
    },
    barSection: {
      display: "flex",
      alignItems: "flex-end",
      position: "relative",
      height: "max-content",
      minHeight: "150px",
      textAlign: "center",
      justifyContent: "center",
    },

    barContainer: {
      width: "85%",
      flexWrap: "nowrap",
      alignItems: "flex-end",
      zIndex: 1,
    },
    bar: {
      width: "60%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      "@keyframes barAnimate": {
        "0%": {
          height: 0,
        },
        "100%": {
          height: "revert-layer",
        },
      },
      animation: "barAnimate 3s ease forwards",
      border: "#BBBBBB solid 1px",
    },
    labelContainer: {
      width: "85%",
      flexWrap: "nowrap",
      alignItems: "flex-start",
      gap: "10px",
      zIndex: 1,
    },
    labelSection: {
      position: "relative",
      height: "max-content",
      textAlign: "center",
      justifyContent: "center",
    },
    barLabel: {
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    level: {
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    positionGrid: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "200px",
      gap: "12px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    yAxisContainer: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        gap: "6px",
      },
    },
    yAxis: {
      borderTop: `2px solid ${theme.palette.background.default}`,
      width:"85%"
    },
  };
};

export default styles;
