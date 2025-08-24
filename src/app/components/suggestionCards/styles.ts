import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    cardContainer: {
      width: "300px",
      textTransform: "none",
      border: `1px solid ${theme.palette.primary.light}`,
      padding: "8px",
      paddingLeft: "16px",
      borderRadius: "8px",
      color: theme.palette.text.primary,
    },
  };
};

export default styles;
