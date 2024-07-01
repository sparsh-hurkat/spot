import { Box, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import { Link as MuiLink } from "@mui/material";

const ChatBox = ({ handleSubmit, input, handleInputChange }) => {
  const classes = useStyles(styles);

  return (
    <Grid sx={classes.textfieldContainer} container>
      <Box
        component="form"
        onSubmit={(e) => handleSubmit("SUBMIT_FORM", e)}
        sx={{ width: "100%", textAlign: "center" }}
      >
        <TextField
          name="chatbox"
          value={input}
          onChange={handleInputChange}
          sx={classes.textfield}
          placeholder="Ask me anything"
          InputProps={{
            endAdornment: (
              <SendIcon onClick={(e) => handleSubmit("SUBMIT_FORM", e)} />
            ),
          }}
          autoComplete="off"
        />
      </Box>
      <Grid sx={{ width: "100%", textAlign: "center" }} item>
        <Typography sx={classes.footer}>
          Spot can make mistakes. Chat with me on{" "}
          <MuiLink
            sx={classes.footerLink}
            href="https://www.linkedin.com/in/sparsh-hurkat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin.
          </MuiLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ChatBox;
