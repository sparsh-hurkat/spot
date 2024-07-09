import { Button, Grid, Typography } from "@mui/material";
import useStyles from "../../hooks/useStyles";
import styles from "./styles";

const SuggestionCards = ({ handleSelectCard, suggestions }) => {
  const classes = useStyles(styles);
  return (
    <Grid sx={{ maxWidth: "900px" }} justifyContent="center" gap={2} container>
      {suggestions.map((label, index) => (
        <Button key={index} variant="outlined" sx={classes.cardContainer}>
          <Grid
            sx={{
              cursor: "pointer",
              justifyContent: "center",
            }}
            onClick={() => handleSelectCard("SELECT_CARD", null, label)}
            container
          >
            <Grid item>
              <Typography>{label}</Typography>
            </Grid>
          </Grid>
        </Button>
      ))}
    </Grid>
  );
};

export default SuggestionCards;
