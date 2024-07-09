import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    cardContainer: {
      width: "300px",
      // backgroundColor: theme.palette.background.paper,
      textTransform: "none",
      // boxShadow: `1px 1px 1px 1px ${theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.light}`,
      padding: "8px",
      paddingLeft: "16px",
      borderRadius: "8px",
      color: theme.palette.text.primary,
    },
  };
};

export default styles;
