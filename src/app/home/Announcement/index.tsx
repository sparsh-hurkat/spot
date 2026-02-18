"use client";

import { Box, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import useStyles from "@/app/hooks/useStyles";
import styles from "./styles";

const REPLY_HREF =
  "mailto:sparsh@cmu.edu?subject=Hi%20Sparsh%2C%0A%0Ajust%20checked%20out%20your%20website";

const AnnouncementContainer = () => {
  const classes = useStyles(styles);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sparsh_Hurkat_Resume_SWE.pdf";
    link.download = "Sparsh_Hurkat_Resume_SWE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box sx={classes.sectionWrapper}>
      <Box sx={classes.emailCard}>
        {/* Subject header */}
        <Box sx={classes.subjectHeader}>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Gmail"
            sx={classes.gmailIcon}
          />
          <Typography sx={classes.subjectLine}>
            [URGENT] Seeking SWE Internship — Summer 2026 🚀
          </Typography>
          <StarBorderIcon sx={classes.iconBtn} />
        </Box>

        {/* Sender row */}
        <Box sx={classes.senderRow}>
          <Box sx={classes.senderAvatar}>S</Box>
          <Box sx={classes.senderMeta}>
            <Box sx={classes.senderTopRow}>
              <Typography sx={classes.senderName}>Sparsh Hurkat</Typography>
              <Typography sx={classes.senderEmailText}>
                &lt;sparsh@cmu.edu&gt;
              </Typography>
              <Box sx={{ flex: 1 }} />
              <Typography sx={classes.dateText}>{dateStr}</Typography>
              <StarBorderIcon sx={classes.iconBtnSm} />
              <ReplyIcon sx={classes.iconBtnSm} />
              <MoreVertIcon sx={classes.iconBtnSm} />
            </Box>
            <Typography sx={classes.recipientText}>to recruiters</Typography>
          </Box>
        </Box>

        {/* Email body */}
        <Box sx={classes.emailBody}>
          <Typography sx={classes.bodyText}>Hi there,</Typography>
          <Typography sx={classes.bodyText}>
            I&apos;m a CMU Information Systems Management grad student and{" "}
            <Box component="span" sx={classes.bold}>software engineer</Box> passionate about building{" "}
            <Box component="span" sx={classes.bold}>scalable, user-focused systems</Box>. My experience spans
            modern web development, cloud infrastructure, and AI-native applications — from{" "}
            <Box component="span" sx={classes.bold}>React/Next.js interfaces</Box> and{" "}
            <Box component="span" sx={classes.bold}>Node/Java backends</Box> to{" "}
            <Box component="span" sx={classes.bold}>agentic AI workflows</Box> on AWS.
          </Typography>
          <Typography sx={classes.bodyText}>
            I thrive at the intersection of{" "}
            <Box component="span" sx={classes.bold}>engineering, product thinking, and execution</Box>,
            with a strong bias toward shipping impactful features quickly. I&apos;m currently seeking{" "}
            <Box component="span" sx={classes.bold}>SWE Intern roles (Summer 2026)</Box> where I can
            contribute as a builder, problem solver, and collaborative teammate.
          </Typography>
          <Typography sx={classes.bodyText}>
            My resume is attached below — feel free to explore the rest of the site too 🚀
          </Typography>

          {/* Attachment */}
          <Box sx={classes.attachmentArea}>
            <Box sx={classes.attachment} onClick={handleDownload}>
              <AttachFileIcon sx={classes.attachIcon} />
              <Box sx={classes.attachInfo}>
                <Typography sx={classes.attachName}>
                  Sparsh_Hurkat_Resume_SWE.pdf
                </Typography>
                <Typography sx={classes.attachSize}>Resume · PDF</Typography>
              </Box>
              <DownloadIcon sx={classes.downloadIcon} />
            </Box>
          </Box>
        </Box>

        {/* Reply bar */}
        <Box sx={classes.replyBar}>
          <Box component="a" href={REPLY_HREF} sx={classes.replyButton}>
            <ReplyIcon sx={classes.replyIcon} />
            <Typography sx={classes.replyText}>Reply</Typography>
          </Box>
          <Box component="a" href={REPLY_HREF} sx={classes.forwardButton}>
            <Typography sx={classes.replyText}>Forward</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AnnouncementContainer;
