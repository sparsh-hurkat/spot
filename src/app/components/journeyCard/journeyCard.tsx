import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import useStyles from "../../hooks/useStyles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { JourneyInterface } from "../../models/commonModel";
import styles from "./styles";

const JourneyCard = (props: { journeyItem: JourneyInterface }) => {
  const { journeyItem } = props;
  const classes = useStyles(styles);
  return (
    <Grid sx={classes.journeyCardBox} item>
      <Grid sx={classes.journeyCardContainer} container>
        <Grid
          item
          sx={{
            ...classes.video,
            backgroundImage: `url(${journeyItem.image})`,
            backgroundColor: journeyItem.color,
          }}
          xs
        ></Grid>
        <Accordion elevation={0} sx={classes.accordion}>
          <AccordionSummary
            sx={{ height: "50px", fontSize: "10px" }}
            expandIcon={<ExpandLessIcon />}
          >
            <Grid xs item>
              <Typography sx={classes.journeyTitle}>
                {journeyItem.name}
              </Typography>
              <Typography variant="caption">{journeyItem.duration}</Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography sx={classes.descrptionText} variant="body1">
              {journeyItem.description.map((line, index) => (
                <Grid component="span" key={index}>
                  {line}
                  <br />
                </Grid>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default JourneyCard;
