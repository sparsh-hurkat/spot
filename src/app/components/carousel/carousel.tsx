import { useState } from "react";
import { config } from "react-spring";
import JourneyCard from "../journeyCard/journeyCard";
import { Grid, useTheme } from "@mui/material";
import useStyles from "../../hooks/useStyles";
import styles from "./styles";
import useSwipe from "../../hooks/useSwipe";
import dynamic from "next/dynamic";
import { JourneyInterface } from "@/app/home/Journey/model";

const Carousel3d = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const Carousel = (props: { journeyList: JourneyInterface[] }) => {
  const classes = useStyles(styles);
  const theme = useTheme();
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => setGoToSlide(goToSlide + 1),
    onSwipedRight: () => setGoToSlide(goToSlide - 1),
  });

  const cards = props.journeyList.map((journeyItem, index) => {
    return {
      key: index,
      content: <JourneyCard key={index} journeyItem={journeyItem} />,
      onClick: () => setGoToSlide(index),
    };
  });

  const [goToSlide, setGoToSlide] = useState(null);

  return (
    <Grid {...swipeHandlers} sx={classes.carousel}>
      <Carousel3d
        slides={cards}
        goToSlide={goToSlide}
        goToSlideDelay={0}
        offsetRadius={theme.breakpoints.down("sm") ? 1 : 2}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </Grid>
  );
};

export default Carousel;
