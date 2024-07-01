import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import BarChart from "@/app/components/barChart/barChart";
import { bars, levels } from "@/app/models/commonModel";

const SkillsContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  return (
    <Grid ref={triggerRef} container sx={classes.skillsContainer}>
      <Grid container sx={classes.sectionLayout}>
        <Grid textAlign="center" item>
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["My Skills", 1000]}
              speed={80}
            />
          )}
        </Grid>
        <Grid item>
          <Grid sx={classes.skillsContent} container>
            <Grid xs item>
              <Typography>
                I am a web developer with a solid <b>two years</b> of experience
                under my belt as of 2024.
                <br />
                <b>Javascript</b> is my playground, and I'm always diving deeper
                into its intricacies to push the boundaries of what's possible.
                Crafting dynamic websites is my forte, especially with{" "}
                <b>ReactJS</b>. This website marks my first real world
                application experience with <b>NextJS</b> (let me know how i did
                and how i can improve). Additionally I have experience with{" "}
                <b>NodeJS</b> for server-side networking.
                <br />
                Back in my college days, I aced <b>Java and Python</b>, but my
                heart truly found its rhythm with JS post-graduation. While I
                might have drifted from Java and Python amidst the captivating
                world of JavaScript, my foundational skills in these languages
                still stand strong.
                <br />
                <b>HTML/CSS</b>? Oh, you bet I've got those down pat. After all,
                what kind of web developer doesn't rock those fundamentals? But
                it's the art of combining these languages seamlessly that truly
                brings my projects to life.
              </Typography>
            </Grid>

            <Grid xs item>
              <BarChart bars={bars} levels={levels} animate={isVisible} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsContainer;
