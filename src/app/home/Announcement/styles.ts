import { Theme } from "@mui/material";

const gmail = {
  card: "#1e1e1e",
  border: "#3c3c3c",
  text: "#e8eaed",
  muted: "#9aa0a6",
  avatarRed: "#ea4335",
  attachBg: "#2d2d2d",
  attachHover: "#383838",
  replyBorder: "#444",
  replyHover: "#333",
  font: '"Google Sans", Roboto, Arial, sans-serif',
};

const styles = (theme: Theme) => {
  return {
    sectionWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "48px 96px",
      backgroundColor: gmail.attachBg,
      [theme.breakpoints.down("md")]: {
        padding: "40px 32px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "32px 12px",
      },
    },

    emailCard: {
      width: "100%",
      maxWidth: "900px",
      backgroundColor: gmail.card,
      borderRadius: "8px",
      border: `1px solid ${gmail.border}`,
      overflow: "hidden",
    },

    // Subject header
    subjectHeader: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "14px 20px",
      borderBottom: `1px solid ${gmail.border}`,
      [theme.breakpoints.down("sm")]: {
        padding: "12px 14px",
        gap: "8px",
      },
    },

    gmailIcon: {
      width: 22,
      height: 22,
      flexShrink: 0,
    },

    subjectLine: {
      fontFamily: gmail.font,
      fontSize: "17px",
      fontWeight: 600,
      color: gmail.text,
      flex: 1,
      lineHeight: 1.3,
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },

    iconBtn: {
      fontSize: 20,
      color: gmail.muted,
      cursor: "pointer",
      flexShrink: 0,
      "&:hover": { color: gmail.text },
    },

    // Smaller icon for sender row
    iconBtnSm: {
      fontSize: 17,
      color: gmail.muted,
      cursor: "pointer",
      flexShrink: 0,
      "&:hover": { color: gmail.text },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    // Sender row
    senderRow: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "16px 20px 0 20px",
      [theme.breakpoints.down("sm")]: {
        padding: "12px 14px 0 14px",
        gap: "10px",
      },
    },

    senderAvatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      backgroundColor: gmail.avatarRed,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: gmail.font,
      flexShrink: 0,
      [theme.breakpoints.down("sm")]: {
        width: "32px",
        height: "32px",
        fontSize: "14px",
      },
    },

    senderMeta: {
      flex: 1,
      minWidth: 0,
    },

    senderTopRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      flexWrap: "nowrap" as const,
      overflow: "hidden",
    },

    senderName: {
      fontFamily: gmail.font,
      fontSize: "14px",
      fontWeight: 600,
      color: gmail.text,
      whiteSpace: "nowrap" as const,
      flexShrink: 0,
    },

    senderEmailText: {
      fontFamily: gmail.font,
      fontSize: "12px",
      color: gmail.muted,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap" as const,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    dateText: {
      fontFamily: gmail.font,
      fontSize: "12px",
      color: gmail.muted,
      whiteSpace: "nowrap" as const,
      flexShrink: 0,
    },

    recipientText: {
      fontFamily: gmail.font,
      fontSize: "12px",
      color: gmail.muted,
      marginTop: "2px",
    },

    // Email body
    emailBody: {
      padding: "16px 20px 20px 70px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
      [theme.breakpoints.down("md")]: {
        padding: "16px 20px 20px 50px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "14px 14px 20px 14px",
      },
    },

    bodyText: {
      fontFamily: gmail.font,
      fontSize: "14px",
      color: gmail.text,
      lineHeight: 1.75,
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },

    bold: {
      fontWeight: 700,
    },

    attachmentArea: {
      marginTop: "8px",
      display: "flex",
      gap: "12px",
      flexWrap: "wrap" as const,
    },

    attachment: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: `1px solid ${gmail.border}`,
      borderRadius: "8px",
      padding: "10px 14px",
      cursor: "pointer",
      backgroundColor: gmail.attachBg,
      transition: "background-color 0.15s",
      "&:hover": { backgroundColor: gmail.attachHover },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: "10px 12px",
      },
    },

    attachIcon: {
      fontSize: 22,
      color: gmail.muted,
      flexShrink: 0,
    },

    attachInfo: {
      display: "flex",
      flexDirection: "column" as const,
      flex: 1,
      minWidth: 0,
    },

    attachName: {
      fontFamily: gmail.font,
      fontSize: "13px",
      fontWeight: 500,
      color: gmail.text,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap" as const,
    },

    attachSize: {
      fontFamily: gmail.font,
      fontSize: "11px",
      color: gmail.muted,
    },

    downloadIcon: {
      fontSize: 18,
      color: gmail.muted,
      flexShrink: 0,
    },

    // Reply bar at bottom
    replyBar: {
      display: "flex",
      gap: "12px",
      padding: "16px 20px 20px 70px",
      borderTop: `1px solid ${gmail.border}`,
      [theme.breakpoints.down("md")]: {
        padding: "14px 20px 18px 50px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "12px 14px 16px 14px",
      },
    },

    replyButton: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      border: `1px solid ${gmail.replyBorder}`,
      borderRadius: "4px",
      padding: "7px 16px",
      cursor: "pointer",
      textDecoration: "none",
      backgroundColor: "transparent",
      transition: "background-color 0.15s",
      "&:hover": { backgroundColor: gmail.replyHover },
    },

    forwardButton: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      border: `1px solid ${gmail.replyBorder}`,
      borderRadius: "4px",
      padding: "7px 16px",
      cursor: "pointer",
      textDecoration: "none",
      backgroundColor: "transparent",
      transition: "background-color 0.15s",
      "&:hover": { backgroundColor: gmail.replyHover },
    },

    replyIcon: {
      fontSize: 16,
      color: gmail.muted,
    },

    replyText: {
      fontFamily: gmail.font,
      fontSize: "13px",
      color: gmail.muted,
      fontWeight: 500,
    },
  };
};

export default styles;
