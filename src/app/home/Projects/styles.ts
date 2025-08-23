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

    projectImageContainer: {
      textAlign: "center",
      height: "400px",
      [theme.breakpoints.down("md")]: {
        height: "300px",
        marginBottom: "32px",
      },
    },

    timelineHeader: {
      marginBottom: "8px",
    },

    timelineSubtitle: {
      marginBottom: "54px",
    },

    mobileTimelineLabel: {
      margin: "12px",
      textAlign: "center",
      fontWeight: 600,
      color: theme.palette.text.primary,
    },

    sliderValueLabel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    },

    sliderValueIconContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      gap: "2px",
    },

    sliderValueText: {
      fontSize: "10px",
      fontWeight: 600,
      color: theme.palette.text.secondary,
    },

    slider: {
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "80%"
      },
      "& .MuiSlider-thumb": {
        color: theme.palette.background.default,
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        border: `2px solid ${theme.palette.primary.main}`,
        "&:hover": {
          boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
        },
      },
      "& .MuiSlider-track": {
        color: theme.palette.primary.main,
        height: "4px",
      },
      "& .MuiSlider-rail": {
        color: theme.palette.primary.light,
        height: "4px",
      },
      "& .MuiSlider-mark": {
        backgroundColor: theme.palette.primary.main,
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        "&.MuiSlider-markActive": {
          backgroundColor: theme.palette.primary.main,
        },
      },
      "& .MuiSlider-valueLabel": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: "8px 12px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        border: `1px solid ${theme.palette.divider}`,
        fontSize: "12px",
        fontWeight: 600,
      },
    },

    projectCard: {
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
      transition: "transform 1s, opacity 1s",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: `1px solid ${theme.palette.divider}`,
      "&:hover": {
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        transform: "translateY(-2px)",
        transition: "all 0.3s ease",
      },
      "&.slide-right": {
        animation: `slideRight 0.4s`,
      },
      "&.slide-left": {
        animation: `slideLeft 0.4s`,
      },
    },

    projectImage: {
      borderRadius: "12px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
        objectFit: "contain",
      },
      height: "auto",
      objectFit: "cover",
    },

    projectHeader: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px",
    },

    projectTitle: {
      fontWeight: 700,
      color: theme.palette.text.secondary,
      margin: 0,
    },

    projectDateBadge: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "4px 8px",
      borderRadius: "12px",
      fontWeight: 600,
      fontSize: "14px",
    },

    projectLinkContainer: {
      marginBottom: "16px",
    },

    projectLinkText: {
      marginBottom: "4px",
    },

    projectLink: {
      marginLeft: "6px",
      fontWeight: 600,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },

    projectDescription: {
      lineHeight: 1.6,
      "& p": {
        marginBottom: "12px"
      },
      "& ul": {
        marginBottom: "12px"
      },
      "& li": {
        marginBottom: "4px"
      },
    },
  };
};

export default styles;
