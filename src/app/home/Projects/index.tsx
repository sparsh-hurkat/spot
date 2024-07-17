import { useIntersection } from "@/app/hooks/useIntersection";
import useStyles from "@/app/hooks/useStyles";
import {
  Grid,
  Link,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./styles";
import CustomTypography from "@/app/components/customTypography";
import { projectsModel } from "@/app/models/commonModel";
import { projectsSlider, projectsSliderMobile } from "./model";
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
              sequence={["Recent Projects", 1000]}
              speed={80}
            />
          )}
        </Grid>
        <Grid item>
          <Grid gap={6} container>
            <Grid justifyContent="center" container>
              <Typography variant="h6" sx={{ marginBottom: "54px" }}>
                Slide to explore
              </Typography>
              <Slider
                aria-label="Restricted values"
                defaultValue={100}
                valueLabelFormat={(value) => {
                  const slider = isDownSm
                    ? projectsSliderMobile
                    : projectsSlider;
                  return slider.find((item) => item.value === value).valueIcon;
                }}
                value={sliderValue}
                onChange={handleSliderChange}
                step={null}
                valueLabelDisplay="on"
                marks={isDownSm ? projectsSliderMobile : projectsSlider}
                sx={{
                  width: "90%",
                  [theme.breakpoints.down("sm")]: { width: "80%" },
                  "& .MuiSlider-thumb": {
                    color: theme.palette.primary.light,
                    borderRadius: "5px",
                    width: "15px",
                    height: "25px"
                  },
                }}
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
                    sx={{
                      transition: "transform 1s, opacity 1s",
                      "&.slide-right": {
                        animation: `${keyframes`
                        0% { transform: translateX(0); opacity: 1; }
                        50% { transform: translateX(25%); opacity: 0; }
                        51% { transform: translateX(-50%); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                      `} 0.4s`,
                      },
                      "&.slide-left": {
                        animation: `${keyframes`
                        0% { transform: translateX(0); opacity: 1; }
                        50% { transform: translateX(-25%); opacity: 0; }
                        51% { transform: translateX(50%); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                      `} 0.4s`,
                      },
                    }}
                    key={index}
                    container
                  >
                    {project.imageConfig ? (
                      <Grid sx={classes.projectImage} xs item>
                        <img
                          style={{
                            borderRadius: "20px",
                          }}
                          height="100%"
                          src={project.imageConfig.src}
                          alt={project.imageConfig.alt}
                        />
                      </Grid>
                    ) : null}
                    <Grid xs item>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography fontWeight="bolder">
                        {project.date}
                      </Typography>
                      <Typography variant="button">
                        {project.linkPreText}
                      </Typography>
                      <Link href={project.link}>
                        <Typography
                          variant="button"
                          color={theme.palette.success.main}
                        >
                          {project.linkDisplayMessage}
                        </Typography>
                      </Link>
                      <Grid sx={{ marginBottom: "12px" }}></Grid>
                      <CustomTypography text={project.description} />
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsContainer;
