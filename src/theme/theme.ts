import { createTheme } from "@mui/material/styles";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    tertiary?: string;
  }

  interface Palette {
    text: TypeText;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
      paper: "#424242",
    },
    text: {
      primary: "#adadad",
      secondary: "#ffffff",
      tertiary: "#adadad",
    },
    primary: {
      main: "#525252",
      light: "#727272",
    },
  },
  typography: {
    fontFamily: ["Akshar", "sans-serif"].join(","),
    allVariants: {
      letterSpacing: "1px",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#ffffff",
      paper: "#ECECEC",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      tertiary: "#c9c9c9",
    },
    primary: {
      main: "#c9c9c9",
      light: "#9b9b9b",
    },
  },
  typography: {
    fontFamily: ["Akshar", "sans-serif"].join(","),
  },
});

export default darkTheme;
