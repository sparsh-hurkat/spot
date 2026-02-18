import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import useStyles from "@/app/hooks/useStyles";
import styles from "./styles";
import { formatCustomTypography } from "@/app/components/customTypography";
import Link from "next/link";
import { Messages } from "@/app/hooks/useChat";

const Response = ({
  input,
  handleInputChange,
  handleSubmit,
  messages,
  isResponseOpen,
  handleClose,
}: {
  input: string;
  handleInputChange: (e: any) => void;
  handleSubmit: (type: string, event: any, value?: string) => void;
  messages: Messages[];
  isResponseOpen: boolean;
  handleClose: () => void;
}) => {
  const classes = useStyles(styles);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isLoading = messages.some((m) => m.id === "loading");

  // Focus hidden textarea when dialog opens and not loading
  useEffect(() => {
    if (isResponseOpen && !isLoading) {
      const timer = setTimeout(() => textareaRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isResponseOpen, isLoading]);

  // Auto-scroll to bottom when messages or input changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages, input]);

  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const loginDate = `${days[now.getDay()]} ${months[now.getMonth()]} ${String(now.getDate()).padStart(2, " ")} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const appendRedirectionLinks = (text: (string | JSX.Element)[]) => {
    const keysToLinks: Record<string, { href: string; text: string }> = {
      THISISSKILLSKEY: { href: "#skills", text: "Click here to know more about my skills" },
      THISISPROJECTSKEY: { href: "#projects", text: "Click here to know more about my projects" },
      THISISJOURNEYKEY: { href: "#journey", text: "Click here to know more about my journey" },
      THISISABOUTKEY: { href: "#about", text: "Click here to know more about me" },
      THISISMASTERSKEY: {
        href: "https://sparsh-hurkat.github.io/guide-to-masters/",
        text: "Click here to know more about my preparation for masters applications",
      },
    };

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/Sparsh_Hurkat_Resume_SWE.pdf";
      link.download = "Sparsh_Hurkat_Resume_SWE.pdf";
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
                <Link
                  style={{ color: "#4ec94e" }}
                  onClick={handleClose}
                  href={href}
                  target={href.startsWith("#") ? "_self" : "_blank"}
                >
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
              <Button
                variant="text"
                sx={{
                  color: "#4ec94e",
                  fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
                  fontSize: "13px",
                  textTransform: "none",
                  padding: "0 4px",
                  minWidth: "unset",
                }}
                onClick={handleDownload}
              >
                Click here to download PDF
              </Button>
            )}
          </React.Fragment>
        ));
      }

      return part;
    });
  };

  const focusTerminal = () => {
    if (!isLoading) textareaRef.current?.focus();
  };

  return (
    <Dialog sx={classes.terminalDialog} open={isResponseOpen}>
      {/* Hidden textarea — captures all keyboard input */}
      <textarea
        ref={textareaRef}
        value={input}
        onChange={handleInputChange}
        readOnly={isLoading}
        onKeyDown={(e) => {
          if (isLoading) return;
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit("SUBMIT_FORM", e);
          }
        }}
        style={{
          position: "fixed",
          opacity: 0,
          width: 1,
          height: 1,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />

      <Box sx={classes.pageWrapper} onClick={focusTerminal}>
        <Box sx={classes.terminalWindow}>
          {/* macOS Title Bar */}
          <Box sx={classes.terminalTitleBar}>
            <Box sx={classes.trafficLights}>
              <Box
                sx={classes.dotRed}
                onClick={(e) => { e.stopPropagation(); handleClose(); }}
                title="Close"
              />
              <Box sx={classes.dotYellow} title="Minimize" />
              <Box sx={classes.dotGreen} title="Maximize" />
            </Box>
            <Typography sx={classes.terminalTitle}>spot — bash — 80×24</Typography>
            <Box sx={{ width: "60px" }} />
          </Box>

          {/* Terminal Content */}
          <Box ref={contentRef} sx={classes.terminalContent}>
            <Typography sx={classes.loginMessage}>
              Last login: {loginDate} on ttys002
            </Typography>

            {messages.map((m) => {
              const isLoadingMessage = m.id === "loading";

              if (m.role === "user") {
                return (
                  <Box key={m.id} sx={classes.messageBlock}>
                    <Box sx={classes.promptLine}>
                      <Typography component="span" sx={classes.promptYou}>
                        you@root-user
                      </Typography>
                      <Typography component="span" sx={classes.promptPath}>
                        {" ~ "}
                      </Typography>
                      <Typography component="span" sx={classes.promptSymbol}>
                        {" % "}
                      </Typography>
                      <Typography component="span" sx={classes.promptInput}>
                        {m.content}
                      </Typography>
                    </Box>
                  </Box>
                );
              }

              // Assistant message
              return (
                <Box key={m.id} sx={classes.messageBlock}>
                  {/* spot@sparsh-hurkat label line */}
                  <Box sx={classes.promptLine}>
                    <Typography component="span" sx={classes.promptSpot}>
                      spot@sparsh-hurkat
                    </Typography>
                    <Typography component="span" sx={classes.promptPath}>
                      {" ~ "}
                    </Typography>
                    <Typography component="span" sx={classes.promptSymbol}>
                      {"% "}
                    </Typography>
                  </Box>
                  {/* Thinking animation or response content */}
                  {isLoadingMessage ? (
                    <Typography component="span" sx={classes.thinkingText}>
                      Thinking
                    </Typography>
                  ) : (
                    <Typography sx={classes.assistantOutput}>
                      {appendRedirectionLinks(formatCustomTypography(m.content))}
                    </Typography>
                  )}
                </Box>
              );
            })}

            {/* Live typing prompt — only shown when not loading */}
            {!isLoading && (
              <Box sx={classes.promptLine}>
                <Typography component="span" sx={classes.promptYou}>
                  you@root-user
                </Typography>
                <Typography component="span" sx={classes.promptPath}>
                  {" ~ "}
                </Typography>
                <Typography component="span" sx={classes.promptSymbol}>
                  {"% "}
                </Typography>
                <Typography component="span" sx={classes.promptInput}>
                  {input}
                </Typography>
                <Box sx={classes.cursor} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Response;
