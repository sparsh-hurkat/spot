import { Box, Grid, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <Grid id="about" ref={triggerRef} container sx={classes.aboutContainer}>
      {/* Figma Toolbar */}
      <Box sx={classes.figmaToolbar}>
        <Box sx={classes.toolbarLeft}>
          <Image
            src="/figma-logo.svg"
            alt="Figma"
            width={14}
            height={20}
            style={{ flexShrink: 0 }}
          />
          <Typography sx={classes.toolbarFileName}>
            sparsh-hurkat-portfolio
          </Typography>
          <Typography sx={classes.toolbarSeparator}>/</Typography>
          <Typography sx={classes.toolbarPageName}>About Me</Typography>
        </Box>
        <Box sx={classes.toolbarCenter}>
          <Box sx={classes.toolbarTool} title="Move">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 1L12 8L7.5 8.5L5 14L4 1Z" />
            </svg>
          </Box>
          <Box sx={classes.toolbarTool} title="Frame">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 1V15M12 1V15M1 4H15M1 12H15" />
            </svg>
          </Box>
          <Box sx={classes.toolbarTool} title="Shape">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="12" height="12" rx="1" />
            </svg>
          </Box>
          <Box sx={classes.toolbarTool} title="Pen">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2L14 14H2L8 2Z" />
            </svg>
          </Box>
          <Box sx={classes.toolbarTool} title="Text">
            <Typography sx={{ fontSize: "14px", fontWeight: 700, lineHeight: 1 }}>T</Typography>
          </Box>
        </Box>
        <Box sx={classes.toolbarRight}>
          <Box sx={classes.zoomBadge}>100%</Box>
        </Box>
      </Box>

      {/* Main Canvas Area */}
      <Box sx={classes.figmaWorkspace}>
        {/* Left Panel - Layers */}
        <Box sx={classes.leftPanel}>
          <Box sx={classes.panelHeader}>
            <Typography sx={classes.panelTitle}>Layers</Typography>
          </Box>
          <Box sx={classes.layersList}>
            <Box sx={classes.layerItem}>
              <Typography sx={classes.layerIcon}>▶</Typography>
              <Typography sx={classes.layerText}>Frame: About</Typography>
            </Box>
            <Box sx={{ ...classes.layerItem, pl: "24px" }}>
              <Typography sx={classes.layerIcon}>T</Typography>
              <Typography sx={classes.layerText}>Bio Text</Typography>
            </Box>
            <Box sx={{ ...classes.layerItem, ...classes.layerItemActive, pl: "24px" }}>
              <Typography sx={classes.layerIcon}>◻</Typography>
              <Typography sx={classes.layerText}>Profile Image</Typography>
            </Box>
            <Box sx={{ ...classes.layerItem, pl: "24px" }}>
              <Typography sx={classes.layerIcon}>▶</Typography>
              <Typography sx={classes.layerText}>Contact Links</Typography>
            </Box>
          </Box>
        </Box>

        {/* Canvas */}
        <Box sx={classes.figmaCanvas}>
          <Box sx={classes.canvasFrame}>
            {/* Frame label */}
            <Typography sx={classes.frameLabel}>About Me</Typography>

            {/* Section Heading with Figma logo */}
            <Box sx={classes.headingRow}>
              <Image
                src="/figma-logo.svg"
                alt="Figma"
                width={28}
                height={42}
                style={classes.headingLogo}
              />
              {isVisible && (
                <TypeAnimation
                  style={classes.typeAnimation}
                  sequence={["About Me", 1000]}
                  speed={80}
                />
              )}
            </Box>

            {/* Content area */}
            <Box sx={classes.aboutContent}>
              <Box sx={classes.imageFloat}>
                <Box sx={classes.imageWrapper}>
                  <Box sx={classes.selectionHandle} data-pos="tl" />
                  <Box sx={{ ...classes.selectionHandle, top: -4, right: -4, left: "auto" }} />
                  <Box sx={{ ...classes.selectionHandle, bottom: -4, left: -4, top: "auto" }} />
                  <Box sx={{ ...classes.selectionHandle, bottom: -4, right: -4, left: "auto", top: "auto" }} />
                  <Image
                    src="/sparsh.jpg"
                    alt="Sparsh Hurkat"
                    width={1250}
                    height={1250}
                    style={classes.image}
                  />
                </Box>
                <Typography sx={classes.dimensionLabel}>250 × 250</Typography>
              </Box>
              <CustomTypography text={aboutLang.aboutContent} sx={classes.bioText} />
            </Box>
          </Box>
        </Box>

        {/* Right Panel - Design */}
        <Box sx={classes.rightPanel}>
          <Box sx={classes.panelHeader}>
            <Typography sx={classes.panelTitle}>Design</Typography>
          </Box>
          <Box sx={classes.designProps}>
            <Box sx={classes.propRow}>
              <Typography sx={classes.propLabel}>X</Typography>
              <Typography sx={classes.propValue}>0</Typography>
              <Typography sx={classes.propLabel}>Y</Typography>
              <Typography sx={classes.propValue}>0</Typography>
            </Box>
            <Box sx={classes.propRow}>
              <Typography sx={classes.propLabel}>W</Typography>
              <Typography sx={classes.propValue}>1440</Typography>
              <Typography sx={classes.propLabel}>H</Typography>
              <Typography sx={classes.propValue}>900</Typography>
            </Box>
            <Box sx={classes.propDivider} />
            <Box sx={classes.propSection}>
              <Typography sx={classes.propSectionTitle}>Fill</Typography>
              <Box sx={classes.propRow}>
                <Box sx={classes.colorSwatch} />
                <Typography sx={classes.propValue}>
                  {theme.palette.mode === "dark" ? "#212121" : "#FFFFFF"}
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.propDivider} />
            <Box sx={classes.propSection}>
              <Typography sx={classes.propSectionTitle}>Stroke</Typography>
              <Typography sx={classes.propValueMuted}>None</Typography>
            </Box>
            <Box sx={classes.propDivider} />
            <Box sx={classes.propSection}>
              <Typography sx={classes.propSectionTitle}>Effects</Typography>
              <Typography sx={classes.propValueMuted}>None</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Contact />
    </Grid>
  );
};

export default AboutContainer;
