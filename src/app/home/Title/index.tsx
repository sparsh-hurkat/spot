"use client";
import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import SuggestionCards from "../../components/suggestionCards/suggestionsCards";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TitleContainer = ({ suggestions, handleSelectCard }) => {
  const classes = useStyles(styles);
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("journey");
    nextSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Grid container sx={classes.titleContainer}>
      <Grid flexDirection="column" alignContent="center" container>
        <Grid item>
          <Typography sx={classes.topHeader}>Hi! I am</Typography>
        </Grid>
        <Grid sx={{ marginBottom: "16px", textAlign: "center" }} item>
          <Typography sx={classes.letters}>Sparsh Hurkat</Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }} item>
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
      <Grid sx={classes.suggesionCardsContainer} item>
        <SuggestionCards
          handleSelectCard={handleSelectCard}
          suggestions={suggestions}
        />
        <Grid sx={{ textAlign: "center", marginTop: "20px" }} item>
          <KeyboardArrowDownIcon
            color="primary"
            onClick={scrollToNextSection}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitleContainer;
