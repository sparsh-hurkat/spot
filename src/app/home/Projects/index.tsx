import { useIntersection } from "@/app/hooks/useIntersection";
import useStyles from "@/app/hooks/useStyles";
import { Grid, Link, Typography } from "@mui/material";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./styles";
import CustomTypography from "@/app/components/customTypography";
import { projectsModel } from "@/app/models/commonModel";

const ProjectsContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  return (
    <Grid id="projects" ref={triggerRef} container sx={classes.projectsContainer}>
      <Grid container sx={classes.sectionLayout}>
        <Grid textAlign="center" item>
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["Recent Projects", 1000]}
              speed={80}
            />
          )}
        </Grid>
        <Grid item>
          <Grid spacing={2} container>
            {projectsModel.map((project, index) => {
              return (
                <Grid sx={{ width: "100%" }} key={index} item>
                  <Grid container>
                    <Grid xs item>
                      <img
                        height={400}
                        src={project.imageConfig.src}
                        alt={project.imageConfig.alt}
                      ></img>
                    </Grid>
                    <Grid xs item>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography fontWeight="bolder">
                        {project.date}
                      </Typography>
                      <Typography variant="button">
                        {project.linkPreText}
                      </Typography>
                      <Link href={project.link}>
                        <Typography variant="button" color="mediumseagreen">
                          {project.linkDisplayMessage}
                        </Typography>
                      </Link>
                      <Grid sx={{ marginBottom: "12px" }}></Grid>
                      <CustomTypography text={project.description} />
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsContainer;
