import { Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import Carousel from "@/app/components/carousel/carousel";
import { journeyList } from "./model";

const JourneyContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");
  return (
    <Grid id="journey" container sx={classes.journeyContainer}>
      <Grid ref={triggerRef} textAlign="center" item>
        {isVisible && (
          <TypeAnimation
            style={classes.typeAnimation}
            sequence={["My Journey", 1000]}
            speed={80}
          />
        )}
      </Grid>
      <Carousel journeyList={journeyList} />
    </Grid>
  );
};

export default JourneyContainer;
