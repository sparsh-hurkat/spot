"use client";
import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Cards from "../../components/cards";
import { suggestions } from "../../models/commonModel";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";

const TitleContainer = ({ suggestions, handleSelectCard }) => {
  const classes = useStyles(styles);
  return (
    <Grid container sx={classes.titleContainer}>
      <Grid flexDirection="column" alignContent="center" container>
        <Grid item>
          <Typography sx={classes.topHeader}>Hi! I am</Typography>
        </Grid>
        <Grid sx={{ marginBottom: "16px" }} item>
          <Typography sx={classes.letters}>Sparsh Hurkat</Typography>
        </Grid>
        <Grid item>
          <TypeAnimation
            style={classes.subheader}
            sequence={[
              "Meet SPOT my virtual assistant. What would you like to know about me?",
              1000,
            ]}
            speed={80}
          />
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "50px" }} item>
        <Cards handleSelectCard={handleSelectCard} suggestions={suggestions} />
      </Grid>
    </Grid>
  );
};

export default TitleContainer;
