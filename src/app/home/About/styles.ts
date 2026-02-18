import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  const isDark = theme.palette.mode === "dark";
  const panelBg = isDark ? "#2c2c2c" : "#f5f5f5";
  const panelBorder = isDark ? "#3e3e3e" : "#e0e0e0";
  const toolbarBg = isDark ? "#1e1e1e" : "#ffffff";
  const canvasBg = isDark ? "#1a1a1a" : "#e8e8e8";
  const frameBg = isDark ? "#2a2a2a" : "#ffffff";
  const textMuted = isDark ? "#888" : "#999";
  const accentBlue = "#0d99ff";

  return {
    aboutContainer: {
      padding: "48px",
      width: "100vw",
      justifyContent: "center",
      backgroundColor: canvasBg,
      color: theme.palette.text.primary,
      marginBottom: "90px",
      flexDirection: "column",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        padding: "12px",
      },
    },

    // ── Toolbar ──
    figmaToolbar: {
      width: "100%",
      height: "48px",
      backgroundColor: toolbarBg,
      borderBottom: `1px solid ${panelBorder}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    toolbarLeft: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    toolbarFileName: {
      fontSize: "13px",
      fontWeight: 600,
      color: theme.palette.text.secondary,
      letterSpacing: "0.3px",
    },
    toolbarSeparator: {
      fontSize: "13px",
      color: textMuted,
    },
    toolbarPageName: {
      fontSize: "13px",
      color: textMuted,
    },
    toolbarCenter: {
      display: "flex",
      alignItems: "center",
      gap: "2px",
      position: "absolute" as const,
      left: "50%",
      transform: "translateX(-50%)",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    toolbarTool: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      cursor: "pointer",
      color: textMuted,
      transition: "all 0.15s ease",
      "&:hover": {
        backgroundColor: isDark ? "#3a3a3a" : "#e8e8e8",
        color: theme.palette.text.secondary,
      },
    },
    toolbarRight: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    zoomBadge: {
      fontSize: "12px",
      color: textMuted,
      backgroundColor: isDark ? "#333" : "#eee",
      padding: "4px 10px",
      borderRadius: "4px",
      fontWeight: 500,
    },

    // ── Workspace (panels + canvas) ──
    figmaWorkspace: {
      display: "flex",
      width: "100%",
      minHeight: "700px",
      [theme.breakpoints.down("md")]: {
        minHeight: "auto",
      },
    },

    // ── Left Panel ──
    leftPanel: {
      width: "220px",
      backgroundColor: panelBg,
      borderRight: `1px solid ${panelBorder}`,
      flexShrink: 0,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    panelHeader: {
      padding: "12px 16px",
      borderBottom: `1px solid ${panelBorder}`,
    },
    panelTitle: {
      fontSize: "12px",
      fontWeight: 600,
      color: textMuted,
      textTransform: "uppercase" as const,
      letterSpacing: "0.5px",
    },
    layersList: {
      padding: "4px 0",
    },
    layerItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      cursor: "pointer",
      transition: "background 0.1s",
      "&:hover": {
        backgroundColor: isDark ? "#353535" : "#eaeaea",
      },
    },
    layerItemActive: {
      backgroundColor: isDark ? "rgba(13,153,255,0.15)" : "rgba(13,153,255,0.1)",
      "&:hover": {
        backgroundColor: isDark ? "rgba(13,153,255,0.2)" : "rgba(13,153,255,0.15)",
      },
    },
    layerIcon: {
      fontSize: "10px",
      color: textMuted,
      width: "14px",
      textAlign: "center" as const,
    },
    layerText: {
      fontSize: "12px",
      color: theme.palette.text.primary,
    },

    // ── Canvas ──
    figmaCanvas: {
      flex: 1,
      padding: "40px",
      overflow: "auto",
      backgroundImage: `radial-gradient(circle, ${isDark ? "#333" : "#ccc"} 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        padding: "2px",
      },
    },
    canvasFrame: {
      backgroundColor: frameBg,
      borderRadius: "8px",
      padding: "48px",
      width: "100%",
      maxWidth: "900px",
      position: "relative" as const,
      boxShadow: isDark
        ? "0 4px 24px rgba(0,0,0,0.4)"
        : "0 4px 24px rgba(0,0,0,0.08)",
      border: `1px solid ${accentBlue}`,
      [theme.breakpoints.down("sm")]: {
        padding: "24px",
      },
    },
    frameLabel: {
      position: "absolute" as const,
      top: "-24px",
      left: "0",
      fontSize: "12px",
      color: accentBlue,
      fontWeight: 500,
    },

    // ── Heading ──
    headingRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "40px",
    },
    typeAnimation: {
      fontFamily: "Akshar, sans-serif",
      color: theme.palette.text.secondary,
      display: "inline-block",
      fontSize: "52px",
      lineHeight: "1",
      letterSpacing: "1px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
      },
    },

    // ── Content ──
    aboutContent: {
      marginBottom: "32px",
      overflow: "hidden",
    },
    imageFloat: {
      float: "right" as const,
      marginLeft: "24px",
      marginBottom: "16px",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        float: "none" as const,
        marginLeft: 0,
        marginBottom: "24px",
        alignItems: "center",
        width: "100%",
      },
    },
    bioText: {
      fontSize: "15px",
      lineHeight: 1.7,
    },
    imageWrapper: {
      position: "relative" as const,
      border: `2px solid ${accentBlue}`,
      borderRadius: "8px",
      overflow: "hidden",
    },
    selectionHandle: {
      position: "absolute" as const,
      width: "8px",
      height: "8px",
      backgroundColor: "#fff",
      border: `1.5px solid ${accentBlue}`,
      borderRadius: "1px",
      top: -4,
      left: -4,
      zIndex: 2,
    },
    image: {
      width: "250px",
      height: "250px",
      display: "block",
      borderRadius: "6px",
      objectFit: "cover" as const,
    },
    dimensionLabel: {
      marginTop: "8px",
      fontSize: "11px",
      color: accentBlue,
      backgroundColor: accentBlue,
      colorAdjust: "exact" as const,
      WebkitTextFillColor: "#fff",
      padding: "2px 8px",
      borderRadius: "3px",
      fontWeight: 500,
    },

    // ── Right Panel ──
    rightPanel: {
      width: "240px",
      backgroundColor: panelBg,
      borderLeft: `1px solid ${panelBorder}`,
      flexShrink: 0,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    designProps: {
      padding: "12px 16px",
    },
    propRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
    },
    propLabel: {
      fontSize: "11px",
      color: textMuted,
      width: "16px",
      fontWeight: 500,
    },
    propValue: {
      fontSize: "12px",
      color: theme.palette.text.primary,
      backgroundColor: isDark ? "#333" : "#eee",
      padding: "4px 8px",
      borderRadius: "4px",
      flex: 1,
    },
    propValueMuted: {
      fontSize: "12px",
      color: textMuted,
      padding: "4px 0",
    },
    propDivider: {
      height: "1px",
      backgroundColor: panelBorder,
      margin: "12px 0",
    },
    propSection: {
      marginBottom: "4px",
    },
    propSectionTitle: {
      fontSize: "11px",
      fontWeight: 600,
      color: textMuted,
      textTransform: "uppercase" as const,
      letterSpacing: "0.5px",
      marginBottom: "8px",
    },
    colorSwatch: {
      width: "20px",
      height: "20px",
      borderRadius: "4px",
      backgroundColor: isDark ? "#212121" : "#ffffff",
      border: `1px solid ${panelBorder}`,
    },
  };
};

export default styles;
