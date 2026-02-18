"use client";

import { Grid, Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState, useMemo } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import styles from "./styles";
import useStyles from "@/app/hooks/useStyles";
import { skillTags, skillCategories, SkillCategory, SortMode } from "./model";

const SkillsContainer = () => {
  const classes = useStyles(styles);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("popular");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Featured");

  const filteredAndSorted = useMemo(() => {
    let tags = [...skillTags];

    if (searchQuery) {
      tags = tags.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCategory === "Featured") {
      tags = tags.filter((t) => t.featured);
    } else if (selectedCategory !== "All") {
      tags = tags.filter((t) => t.category === selectedCategory);
    }

    switch (sortMode) {
      case "popular":
        tags.sort((a, b) => b.level - a.level);
        break;
      case "name":
        tags.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "new":
        tags.sort(() => Math.random() - 0.5);
        break;
    }

    return tags;
  }, [searchQuery, sortMode, selectedCategory]);

  const getCategoryCount = (cat: SkillCategory) =>
    cat === "All"
      ? skillTags.length
      : cat === "Featured"
        ? skillTags.filter((t) => t.featured).length
        : skillTags.filter((t) => t.category === cat).length;

  const sortOptions: SortMode[] = ["popular", "name", "new"];

  return (
    <Grid id="skills" ref={triggerRef} container sx={classes.skillsContainer}>
      {/* Header */}
      <Box sx={{ width: "100%", maxWidth: "900px", marginBottom: "32px" }}>
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

      {/* Main content: tabs + grid */}
      <Box sx={classes.contentRow}>
        {/* Category tabs - vertical on desktop, horizontal on mobile */}
        <Box sx={classes.categoryTabs}>
          {skillCategories.map((cat) => (
            <Button
              key={cat}
              disableRipple
              onClick={() => setSelectedCategory(cat)}
              sx={selectedCategory === cat ? classes.categoryTabActive : classes.categoryTab}
            >
              <Typography component="span" sx={classes.categoryTabText}>
                {cat}
              </Typography>
              <Typography component="span" sx={classes.categoryTabCount}>
                {getCategoryCount(cat)}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* Tags grid */}
        <Box sx={classes.tagsGrid}>
          {filteredAndSorted.map((tag) => (
            <Box key={tag.name} sx={classes.tagCard}>
              <Box sx={classes.tagPill}>
                <Typography sx={classes.tagPillText}>{tag.name}</Typography>
              </Box>
              <Box sx={classes.levelRow}>
                <Box sx={classes.levelTrack}>
                  <Box sx={{ ...classes.levelFill, width: `${tag.level}%` }} />
                </Box>
                <Typography sx={classes.levelLabel}>{tag.level}%</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default SkillsContainer;
