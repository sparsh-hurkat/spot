import useStyles from "@/app/hooks/useStyles";
import { Grid, Typography } from "@mui/material";
import styles from "./styles";

const BarChart = ({ bars, levels, animate }) => {
  const heightMapping = {
    beginner: "36px",
    average: "66px",
    kickass: "102px",
    rockstar: "138px",
  };
  const colorMapping = {
    blue: {
      borderColor: "#8dc5be",
      backgroundImage: "linear-gradient(#b0dbd6, #5fb2a8)",
    },
    pink: {
      borderColor: "#ebc0b5",
      backgroundImage: "linear-gradient(#f4dcd6, #e1ae9e)",
    },
    yellow: {
      borderColor: "#e7af30",
      backgroundImage: "linear-gradient(#efc563, #dfae36)",
    },
    brown: {
      borderColor: "#dcb386",
      backgroundImage: "linear-gradient(#dcba83, #bc8e5b)",
    },
    red: {
      borderColor: "#e14949",
      backgroundImage: "linear-gradient(#da6d6c, #ca4544)",
    },
  };
  const classes = useStyles(styles);

  return (
    <Grid sx={{ position: "relative" }} container>
      <Grid container sx={classes.mainContainer}>
        <Grid sx={classes.barContainer} container>
          {bars.map((bar, i) => {
            return (
              <Grid key={i} sx={classes.barSection} xs item>
                <Grid justifyContent="center" container>
                  {animate && (
                    <Grid
                      sx={{
                        ...classes.bar,
                        height: Object.keys(heightMapping).includes(bar.height)
                          ? heightMapping[bar.height]
                          : bar.height,

                        borderColor: colorMapping[bar.color]?.borderColor,
                        backgroundImage:
                          colorMapping[bar.color]?.backgroundImage,
                      }}
                      item
                    ></Grid>
                  )}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid sx={classes.xAxis} item></Grid>

        <Grid sx={classes.labelContainer} container>
          {bars.map((bar, i) => {
            return (
              <Grid key={i} sx={classes.labelSection} xs item>
                <Typography sx={classes.barLabel}>{bar.label}</Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid sx={classes.positionGrid} item>
          {levels.map((level, i) => {
            return (
              <Grid
                key={i}
                sx={{ ...classes.yAxisContainer, top: `${34 * i}px` }}
                item
              >
                <Grid sx={classes.yAxis} />
                <Typography sx={classes.level}>{level}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarChart;
