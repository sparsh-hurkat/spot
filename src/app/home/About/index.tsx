import { Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import CustomTypography from "@/app/components/customTypography";
import Image from "next/image";
import { aboutLang } from "./model";
import Contact from "./contact";

const AboutContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  return (
    <Grid id="about" ref={triggerRef} container sx={classes.aboutContainer}>
      <Grid container sx={classes.sectionLayout}>
        <Grid textAlign="center" item>
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["About Me", 1000]}
              speed={80}
            />
          )}
        </Grid>
        <Grid item>
          <Grid sx={classes.aboutContent} container>
            <Grid xs item>
              <CustomTypography text={aboutLang.aboutContent} />
            </Grid>
            <Grid xs item>
              <Grid justifyContent="center" container>
                <Image
                  src="/sparsh.jpg"
                  alt="Sparsh Hurkat"
                  width={1250}
                  height={1250}
                  style={classes.image}
                />
              </Grid>
            </Grid>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutContainer;
