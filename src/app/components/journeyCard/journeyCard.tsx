import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import useStyles from "../../hooks/useStyles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./styles";
import { JourneyInterface } from "@/app/home/Journey/model";
import ReactMarkdown from 'react-markdown';

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
            <ReactMarkdown
              components={{
                p: ({node, ref, ...props}) => (
                  <Typography sx={classes.descriptionText} component="p" {...props} />
                ),
                a: ({node, ...props}) => (
                  <a style={{ color: '#1976d2' }} target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {journeyItem.description}
            </ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default JourneyCard;
