import { useIntersection } from "@/app/hooks/useIntersection";
import useStyles from "@/app/hooks/useStyles";
import {
  Box,
  Grid,
  Link,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ReactMarkdown from "react-markdown";
import styles from "./styles";
import { projectsSlider, projectsSliderMobile } from "./sliderModel";
import { projectsModel } from "./commonModel";
import { keyframes } from "@emotion/react";

const ProjectsContainer = () => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  const [sliderValue, setSliderValue] = useState<number | number[]>(100);
  const [selectedProject, setSelectedProject] = useState<number | number[]>(
    100
  );
  const [direction, setDirection] = useState("none");

  const handleSliderChange = (event, newValue) => {
    const newDirection = newValue > selectedProject ? "right" : "left";
    setDirection(newDirection);
    setSliderValue(newValue);
    setTimeout(() => {
      setTimeout(() => {
        setDirection("");
      }, 200);
      setSelectedProject(newValue);
    }, 200);
  };

  return (
    <Grid
      id="projects"
      ref={triggerRef}
      container
      sx={classes.projectsContainer}
    >
      <Grid container sx={classes.sectionLayout}>
        <Grid textAlign="center" item>
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["My Projects", 1000]}
              speed={80}
            />
          )}
        </Grid>
        <Grid item>
          <Grid gap={6} container>
            <Grid justifyContent="center" container>
              <Grid sx={{ marginBottom: "54px" }} item>
                <Typography variant="h6" sx={classes.timelineHeader}>
                  Explore my projects through the years
                </Typography>
                {isDownSm ? (
                  <Typography sx={classes.mobileTimelineLabel}>
                    {projectsSlider.find((item) => item.value === sliderValue)?.label}
                  </Typography>
                ) : null}
              </Grid>
              <Slider
                aria-label="Project timeline"
                defaultValue={100}
                valueLabelFormat={(value) => {
                  const slider = isDownSm ? projectsSlider : projectsSlider;
                  const item = slider.find((item) => item.value === value);
                  return (
                    <Grid container style={classes.sliderValueLabel}>
                      <Grid container style={classes.sliderValueIconContainer}>
                        {item?.valueIcon}
                      </Grid>
                    </Grid>
                  );
                }}
                value={sliderValue}
                onChange={handleSliderChange}
                step={null}
                valueLabelDisplay="on"
                marks={isDownSm ? projectsSliderMobile : projectsSlider}
                sx={classes.slider}
              />
            </Grid>

            <Grid container gap={4}>
              {projectsModel[
                projectsSlider.find((item) => item.value === selectedProject)
                  .key
              ].map((project, index) => {
                return (
                  <Grid
                    className={direction ? `slide-${direction}` : ""}
                    key={index}
                    container
                    sx={classes.projectCard}
                  >
                    {project.imageConfig ? (
                      <Grid sx={classes.projectImageContainer} xs item>
                        <Box
                          component="img"
                          src={project.imageConfig.src}
                          alt={project.imageConfig.alt}
                          sx={classes.projectImage}
                        />
                      </Grid>
                    ) : null}
                    <Grid sx={{ marginLeft: { xs: 0, sm: "16px" } }} xs md={project.imageConfig ? 8 : 12} item>
                      <Grid container style={classes.projectHeader}>
                        <Typography
                          variant="h5"
                          sx={classes.projectTitle}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={classes.projectDateBadge}
                        >
                          {project.date}
                        </Typography>
                      </Grid>

                      {project.link && project.linkDisplayMessage && (
                        <Grid container style={classes.projectLinkContainer}>
                          <Typography variant="button" sx={classes.projectLinkText}>
                            {project.linkPreText}
                          </Typography>
                          <Link target="_blank" href={project.link}>
                            <Typography
                              variant="button"
                              color={theme.palette.success.main}
                              sx={classes.projectLink}
                            >
                              {project.linkDisplayMessage} →
                            </Typography>
                          </Link>
                        </Grid>
                      )}

                      <Typography
                        component="div"
                        sx={classes.projectDescription}
                      >
                        <ReactMarkdown>{project.description}</ReactMarkdown>
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </Grid >
  );
};

export default ProjectsContainer;
