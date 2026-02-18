import { Theme } from "@mui/material";

const styles = (theme: Theme) => {
  return {
    terminalDialog: {
      ".MuiPaper-root": {
        maxWidth: "none",
        width: "72vw",
        height: "82vh",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
        [theme.breakpoints.down("md")]: {
          width: "92vw",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        },
      },
    },
    pageWrapper: {
      display: "flex",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
    terminalWindow: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    terminalTitleBar: {
      backgroundColor: "#3c3c3c",
      padding: "8px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      userSelect: "none",
      flexShrink: 0,
    },
    trafficLights: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      width: "60px",
    },
    dotRed: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#ff5f57",
      cursor: "pointer",
      flexShrink: 0,
      "&:hover": {
        filter: "brightness(0.75)",
      },
    },
    dotYellow: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#febc2e",
      flexShrink: 0,
    },
    dotGreen: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#28c840",
      flexShrink: 0,
    },
    terminalTitle: {
      color: "#c0c0c0",
      fontSize: "13px",
      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
      textAlign: "center",
      flex: 1,
    },
    terminalContent: {
      backgroundColor: "#1a1a1a",
      flex: 1,
      overflowY: "auto",
      padding: "16px 20px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#444",
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#666",
      },
    },
    loginMessage: {
      color: "#8a8a8a",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
      marginBottom: "16px",
    },
    messageBlock: {
      marginBottom: "12px",
    },
    promptLine: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      lineHeight: 1.5,
    },
    // you@root-user — green
    promptYou: {
      color: "#4ec94e",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
    },
    // spot@sparsh-hurkat — blue
    promptSpot: {
      color: "#4fc3f7",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
    },
    promptPath: {
      paddingLeft: "6px",
      color: "#c0c0c0",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
    },
    promptSymbol: {
      padding: "6px",
      color: "#e5e5e5",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
    },
    promptInput: {
      color: "#e5e5e5",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
    },
    thinkingText: {
      color: "#8a8a8a",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
      "@keyframes thinkingEllipsis": {
        "0%": { width: "0" },
        "100%": { width: "1.5em" },
      },
      "&::after": {
        content: '"..."',
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        width: "0",
        animation: "thinkingEllipsis 1.2s steps(3, end) infinite",
      },
    },
    assistantOutput: {
      color: "#d4d4d4",
      fontSize: "13px",
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
      whiteSpace: "pre-wrap",
      lineHeight: 1.7,
      paddingLeft: "2px",
    },
    cursor: {
      display: "inline-block",
      width: "8px",
      height: "14px",
      backgroundColor: "#e5e5e5",
      marginLeft: "2px",
      verticalAlign: "text-bottom",
      "@keyframes termCursorBlink": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      animation: "termCursorBlink 1.1s step-end infinite",
    },
  };
};

export default styles;
