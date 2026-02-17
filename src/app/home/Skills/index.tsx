"use client";

import { Grid, Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState, useMemo } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import { skillTags, SortMode } from "./model";

const SkillsContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("popular");

  const filteredAndSorted = useMemo(() => {
    let tags = [...skillTags];

    if (searchQuery) {
      tags = tags.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortMode) {
      case "popular":
        tags.sort((a, b) => b.questions - a.questions);
        break;
      case "name":
        tags.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "new":
        tags.sort(() => Math.random() - 0.5);
        break;
    }

    return tags;
  }, [searchQuery, sortMode]);

  const sortOptions: SortMode[] = ["popular", "name", "new"];

  return (
    <Grid id="skills" ref={triggerRef} container sx={classes.skillsContainer}>
      {/* Header */}
      <Box sx={{ width: "100%", maxWidth: "800px", marginBottom: "32px" }}>
        <Box sx={classes.headerRow}>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
            alt="Stack Overflow"
            sx={classes.soLogo}
          />
          {isVisible && (
            <TypeAnimation
              style={classes.typeAnimation}
              sequence={["My Skills", 1000]}
              speed={80}
            />
          )}
        </Box>
        <Typography sx={classes.subtitle}>
          Top Skills
        </Typography>
      </Box>

      {/* Toolbar: search + sort */}
      <Box sx={classes.toolbarRow}>
        <TextField
          placeholder="Filter by skill name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18 }} />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={classes.sortGroup}>
          {sortOptions.map((mode) => (
            <Button
              key={mode}
              disableRipple
              onClick={() => setSortMode(mode)}
              sx={sortMode === mode ? classes.sortBtnActive : classes.sortBtn}
            >
              {mode}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Tags grid */}
      <Box sx={classes.tagsGrid}>
        {filteredAndSorted.map((tag) => (
          <Box key={tag.name} sx={classes.tagCard}>
            <Box sx={classes.tagPill}>
              <Typography sx={classes.tagPillText}>{tag.name}</Typography>
            </Box>
            <Box sx={classes.tagMeta}>
              <Typography sx={classes.tagQuestions}>
                {tag.questions} questions
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default SkillsContainer;
