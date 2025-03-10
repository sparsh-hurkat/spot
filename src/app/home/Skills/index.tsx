import { Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import BarChart from "@/app/components/barChart/barChart";
import CustomTypography from "@/app/components/customTypography";
import { bars, skillsLang, levels } from "./model";

const SkillsContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  return (
    <Grid id="skills" ref={triggerRef} container sx={classes.skillsContainer}>
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
              <CustomTypography text={skillsLang.skillsContent1} />
            </Grid>
            <Grid xs item>
              <BarChart bars={bars} levels={levels} animate={isVisible} />
            </Grid>
            <Grid xs={12} item>
              <CustomTypography text={skillsLang.skillsContent2} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsContainer;
