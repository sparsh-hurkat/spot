import { Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles";
import useStyles from "../hooks/useStyles";

const Cards = ({ handleSelectCard, suggestions }) => {
  const classes = useStyles(styles);
  return (
    <Grid justifyContent="center" gap={2} container>
      {suggestions.map((label, index) => (
        <Grid key={index} xs={5} sx={classes.cardContainer} item>
          <Grid
            sx={{ cursor: "pointer" }}
            onClick={() => handleSelectCard("SELECT_CARD", null, label)}
            container
          >
            <Grid xs={11} item>
              <Typography>{label}</Typography>
            </Grid>
            <Grid xs={1} item>
              <KeyboardArrowRightIcon />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
