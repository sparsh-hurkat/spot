import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "@/app/hooks/useStyles";
import styles from "./styles";
import ChatBox from "../ChatBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CycloneIcon from "@mui/icons-material/Cyclone";
import { formatCustomTypography } from "@/app/components/customTypography";
import Link from "next/link";

const Response = ({
  input,
  handleInputChange,
  handleSubmit,
  messages,
  isResponseOpen,
  handleClose,
}) => {
  const classes = useStyles(styles);
  const theme = useTheme();

  const appendRedirectionLinks = (text: (string | JSX.Element)[]) => {
    const keysToLinks: Record<string, { href: string; text: string }> = {
      THISISSKILLSKEY: { href: "#skills", text: "Click here to know more about my skills" },
      THISISPROJECTSKEY: { href: "#projects", text: "Click here to know more about my projects" },
      THISISJOURNEYKEY: { href: "#journey", text: "Click here to know more about my journey" },
      THISISABOUTKEY: { href: "#about", text: "Click here to know more about me" },
    };
  
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/Sparsh_Hurkat's_Resume_Mar_2025.pdf";
      link.download = "Sparsh_Hurkat's_Resume_Mar_2025.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return text.map((part, index) => {
      if (typeof part !== "string") return part;
  
      for (const key in keysToLinks) {
        if (part.includes(key)) {
          const { href, text } = keysToLinks[key];
          return part.split(key).map((subPart, subIndex, array) => (
            <React.Fragment key={`${index}-${subIndex}`}>
              {subPart}
              {subIndex !== array.length - 1 && (
                <Link style={{ color: theme.palette.success.main }} onClick={handleClose} href={href}>
                  {text}
                </Link>
              )}
            </React.Fragment>
          ));
        }
      }
  
      if (part.includes("THISISRESUMEKEY")) {
        return part.split("THISISRESUMEKEY").map((subPart, subIndex, array) => (
          <React.Fragment key={`${index}-${subIndex}`}>
            {subPart}
            {subIndex !== array.length - 1 && (
              <Button variant="contained" style={{ color: theme.palette.success.main }} onClick={handleDownload}>
                Click here to download PDF
              </Button>
            )}
          </React.Fragment>
        ));
      }
  
      return part;
    });
  };
  

  return (
    <Dialog fullScreen open={isResponseOpen}>
      <CloseIcon onClick={handleClose} sx={classes.closeIconPosition} />
      <Grid sx={classes.dialogTitle} container>
        <Grid sx={classes.dialogBox} item>
          <Typography variant="h5">{"Hey!! I am Spot"}</Typography>
          <Typography variant="body2">
            {"Sparsh's virtual assistant"}
          </Typography>
        </Grid>
      </Grid>
      <DialogContent sx={classes.dialogContent}>
        <Grid sx={{ justifyContent: "center" }} container>
          <Grid sx={classes.responseContainer} item>
            <Grid sx={classes.responseBox} container>
              {messages.map((m) => {
                const formattedText = formatCustomTypography(m.content);
                const formattedTextWithLink =
                  appendRedirectionLinks(formattedText);
                return (
                  <Grid item key={m.id}>
                    {m.role === "user" ? (
                      <Grid
                        sx={{ alignItems: "center", gap: "12px" }}
                        container
                      >
                        <AccountCircleIcon />
                        <Typography fontWeight="bold">You</Typography>
                      </Grid>
                    ) : (
                      <Grid
                        sx={{ alignItems: "center", gap: "12px" }}
                        container
                      >
                        <CycloneIcon />
                        <Typography fontWeight="bold">Spot</Typography>
                      </Grid>
                    )}
                    <Grid sx={{ paddingLeft: "36px" }} container>
                      <Typography sx={{ whiteSpace: "pre-wrap" }}>
                        {formattedTextWithLink}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ChatBox
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
};

export default Response;
