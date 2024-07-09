import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    textfield: {
      width: "80%",
      "& label.Mui-focused": {
        color: theme.palette.text.secondary,
      },
      "& label": {
        color: theme.palette.text.primary,
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor: theme.palette.background.default,
        borderRadius: "16px",
        color: theme.palette.text.secondary,
        "& fieldset": {
          borderColor: theme.palette.text.primary,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.text.secondary,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.text.secondary,
        },
      },
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
    },

    textfieldContainer: {
      flexDirection: "column",
      position: "fixed",
      paddingBottom: "6px",
      paddingTop: "12px",
      bottom: 0,
      left: 0,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 5,
      gap: "6px",
      backgroundColor: theme.palette.background.default,
    },

    footer: {
      color: theme.palette.text.primary,
      fontSize: "12px",
    },
    footerLink: {
      color: theme.palette.success.main,
      cursor: "pointer",
    },
  };
};
export default styles;
