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
import CustomTypography from "../customTypography";

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
            sx={{ height: "70px", fontSize: "10px" }}
            expandIcon={<ExpandLessIcon />}
          >
            <Grid xs item>
              <Typography sx={classes.journeyTitle}>
                {journeyItem.name}
              </Typography>
              <Typography>{journeyItem.duration}</Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <CustomTypography sx={classes.descriptionText} text={journeyItem.description} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default JourneyCard;
