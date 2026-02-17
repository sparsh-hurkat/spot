import { useIntersection } from "@/app/hooks/useIntersection";
import useStyles from "@/app/hooks/useStyles";
import {
  Box,
  Grid,
  Link,
  Typography,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  InputBase,
  Button,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ReactMarkdown from "react-markdown";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./styles";
import { allProjects, projectYears, projectsByYear, LANGUAGE_COLORS } from "./commonModel";

const ProjectsContainer = () => {
  const classes = useStyles(styles);
  const theme = useTheme();
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState(projectYears[0]);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  // Search across all repos; year filter applies only when no search is active
  const filteredProjects = searchQuery
    ? allProjects.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : projectsByYear[selectedYear] ?? [];

  return (
    <Grid
      id="projects"
      ref={triggerRef}
      container
      sx={classes.projectsContainer}
    >
      <Grid container sx={classes.sectionLayout}>
        {/* Header */}
        <Box sx={{ width: "100%" }}>
          <Box sx={classes.headerRow}>
            <GitHubIcon sx={classes.githubLogo} />
            {isVisible && (
              <TypeAnimation
                style={classes.typeAnimation}
                sequence={["My Projects", 1000]}
                speed={80}
              />
            )}
          </Box>
          <Typography variant="h6" sx={classes.subtitle}>
            A collection of my work
          </Typography>
        </Box>

        {/* Search row */}
        <Box sx={classes.searchRow}>
          <Box sx={classes.searchBar}>
            <SearchIcon sx={classes.searchIcon} />
            <InputBase
              placeholder="Find a repository..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={classes.searchInput}
            />
          </Box>
        </Box>

        {/* Main content: year sidebar + repo list */}
        <Box sx={classes.mainContent}>
          {/* Year sidebar */}
          <Box sx={classes.yearSidebar}>
            {projectYears.map(year => (
              <Box
                key={year}
                onClick={() => setSelectedYear(year)}
                sx={selectedYear === year ? classes.yearItemActive : classes.yearItem}
              >
                {year}
              </Box>
            ))}
          </Box>

          {/* Repo list */}
          <Box sx={classes.repoListContainer}>
            {filteredProjects.length === 0 ? (
              <Typography sx={classes.emptyState}>No repositories found.</Typography>
            ) : (
              filteredProjects.map((project, index) => (
                <Box key={index} sx={classes.repoItem}>
                  <Box sx={classes.repoItemHeader}>
                    <Box sx={classes.repoItemTitleRow}>
                      <Typography
                        sx={classes.repoItemName}
                        onClick={() => handleCardClick(project)}
                      >
                        {project.title}
                      </Typography>
                      <Chip
                        label={project.isPublic ? "Public" : "Private"}
                        size="small"
                        sx={classes.visibilityBadge}
                      />
                      <Chip
                        label={project.date}
                        size="small"
                        sx={classes.visibilityBadge}
                      />
                    </Box>
                    <Button
                      startIcon={<StarBorderIcon />}
                      sx={classes.starButton}
                      size="small"
                      disableRipple
                    >
                      Star
                    </Button>
                  </Box>

                  <Typography sx={classes.repoItemDesc}>
                    {project.descriptionPreview}
                  </Typography>

                  <Box sx={classes.repoItemMeta}>
                    {project.language.map((lang, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Box component="span" sx={{ ...classes.langDot, backgroundColor: LANGUAGE_COLORS[lang.name] }} />
                        <Typography component="span" sx={classes.metaText}>{lang.name}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={classes.languageBar}>
                    {project.language.map((lang, i) => (
                      <Box
                        key={i}
                        component="span"
                        sx={{
                          display: "inline-block",
                          width: `${lang.pct}%`,
                          height: "100%",
                          backgroundColor: LANGUAGE_COLORS[lang.name],
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Grid>

      {/* README Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: classes.modalPaper }}
      >
        <Box sx={classes.modalHeader1}>
          <Box sx={classes.modalHeader2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h5" sx={classes.modalTitle}>
                {selectedProject?.title}
              </Typography>
              <Chip label={selectedProject?.date} size="medium" sx={classes.dateBadge} />
            </Box>

            <IconButton onClick={handleClose} sx={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            {selectedProject?.link && selectedProject?.linkDisplayMessage && (
              <Link
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={classes.projectLink}
                style={{ color: "unset" }}
              >
                <Typography variant="button" color={theme.palette.success.main}>
                  {selectedProject.linkPreText}{selectedProject.linkDisplayMessage}→
                </Typography>
              </Link>
            )}
          </Box>
        </Box>

        <DialogContent sx={classes.modalContent}>
          {selectedProject?.imageConfig && (
            <Box sx={classes.modalImageContainer}>
              <Box
                component="img"
                src={selectedProject.imageConfig.src}
                alt={selectedProject.imageConfig.alt}
                sx={classes.modalImage}
              />
            </Box>
          )}
          <Box sx={classes.readmeContent}>
            <ReactMarkdown>{selectedProject?.description}</ReactMarkdown>
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default ProjectsContainer;
