"use client";
import { darkTheme, lightTheme } from "@/theme/theme";
import "../styles/page.module.css";
import HomePage from "./home/page";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HomePage />
    </ThemeProvider>
  );
}
