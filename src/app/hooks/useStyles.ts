import { useTheme } from "@mui/material";

const useStyles = (styles) => {
  const theme = useTheme();
  return styles(theme);
};

export default useStyles;
