import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "@/app/hooks/useStyles";
import styles from "./styles";
import ChatBox from "../ChatBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CycloneIcon from "@mui/icons-material/Cyclone";
import CustomTypography from "@/app/components/customTypography";

const Response = ({
  input,
  handleInputChange,
  handleSubmit,
  messages,
  isResponseOpen,
  handleClose,
}) => {
  const classes = useStyles(styles);

  return (
    <Dialog fullScreen open={isResponseOpen}>
      <CloseIcon onClick={handleClose} sx={classes.closeIconPosition} />
      <Grid sx={classes.dialogTitle} container>
        <Grid sx={classes.dialogBox} item>
          <Typography variant="h5">Hey!! I am Spot</Typography>
          <Typography variant="body2">Sparsh's virtual assistant</Typography>
        </Grid>
      </Grid>
      <DialogContent sx={classes.dialogContent}>
        <Grid sx={{ justifyContent: "center" }} container>
          <Grid sx={classes.responseContainer} item>
            <Grid sx={classes.responseBox} container>
              {messages.map((m) => (
                <Grid item key={m.id}>
                  {m.role === "user" ? (
                    <Grid sx={{ alignItems: "center", gap: "12px" }} container>
                      <AccountCircleIcon />
                      <Typography fontWeight="bold">You</Typography>
                    </Grid>
                  ) : (
                    <Grid sx={{ alignItems: "center", gap: "12px" }} container>
                      <CycloneIcon />
                      <Typography fontWeight="bold">Spot</Typography>
                    </Grid>
                  )}
                  <Grid sx={{ paddingLeft: "36px" }} container>
                    <CustomTypography text={m.content} />
                  </Grid>
                </Grid>
              ))}
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
