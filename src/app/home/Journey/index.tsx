"use client";

import { useIntersection } from "@/app/hooks/useIntersection";
import useStyles from "@/app/hooks/useStyles";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ReactMarkdown from "react-markdown";
import styles from "./styles";
import { journeyList } from "./model";

const DEFAULT_VISIBLE = 2;

const JourneyContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const visibleItems = showAll ? journeyList : journeyList.slice(0, DEFAULT_VISIBLE);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Grid id="journey" ref={triggerRef} container sx={classes.journeyContainer}>
      {/* Header */}
      <Box sx={{ width: "100%", maxWidth: "800px", marginBottom: "32px" }}>
        <Box sx={classes.headerRow}>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            sx={classes.linkedinLogo}
          />
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["My Journey", 1000]}
              speed={80}
            />
          )}
        </Box>
        <Typography sx={classes.subtitle}>
          Experience &middot; Education
        </Typography>
      </Box>

      {/* Card */}
      <Box sx={classes.card}>
        {/* Card header */}
        <Box sx={classes.cardHeader}>
          <Typography sx={classes.cardHeaderTitle}>Experience & Education</Typography>
          <Box sx={{ display: "flex", gap: "4px" }}>
            <IconButton size="small" sx={classes.cardHeaderIcon}>
              <AddIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={classes.cardHeaderIcon}>
              <EditIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ padding: "0 24px" }}>
          {visibleItems.map((item, index) => (
            <Box key={index}>
              {/* Row: logo + text */}
              <Box sx={classes.itemRow}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={classes.companyLogo}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={classes.experienceTitle}>
                    {item.name}
                  </Typography>
                  <Typography sx={classes.experienceRole}>
                    {item.role}
                  </Typography>
                  <Typography sx={classes.experienceDuration}>
                    {item.duration}
                  </Typography>
                  <Typography sx={classes.experienceLocation}>
                    {item.location}
                  </Typography>

                  {/* Expandable description */}
                  <Typography component="div" sx={classes.experienceDescription}>
                    <ReactMarkdown>
                      {expandedItems[index]
                        ? item.description
                        : item.description.slice(0, 80) + (item.description.length > 50 ? "..." : "")}
                    </ReactMarkdown>
                  </Typography>
                  {item.description.length > 150 && (
                    <Button
                      disableRipple
                      onClick={() => toggleExpand(index)}
                      sx={classes.showMoreTextBtn}
                    >
                      {expandedItems[index] ? "...show less" : "...show more"}
                    </Button>
                  )}
                </Box>
              </Box>

              {/* Divider between items */}
              {index < visibleItems.length - 1 && (
                <Divider sx={classes.divider} />
              )}
            </Box>
          ))}
        </Box>

        {/* Show all / Show less button */}
        {journeyList.length > DEFAULT_VISIBLE && (
          <>
            <Divider sx={classes.divider} />
            <Button
              disableRipple
              onClick={() => setShowAll(prev => !prev)}
              sx={classes.showAllBtn}
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    fontSize: "16px !important",
                    transition: "transform 0.2s",
                    transform: showAll ? "rotate(270deg)" : "rotate(0deg)",
                  }}
                />
              }
            >
              {showAll
                ? "Show less"
                : `Show all ${journeyList.length} experiences`}
            </Button>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default JourneyContainer;
