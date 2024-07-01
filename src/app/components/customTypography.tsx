import { Typography } from "@mui/material";
import React from "react";

const useCustomTypography = (text: string) => {
  const regex = /\*\*(.*?)\*\*/g; // Matches bold text with double asterisks
  const bulletRegex = /\*/g; // Matches individual asterisks for bullets

  const parts = text.split(regex);
  return parts.map(
    (part, index) =>
      index % 2 === 0 ? (
        part.replace(bulletRegex, "•") // Replace single asterisks with bullet point
      ) : (
        <b key={index}>{part}</b>
      ) // Wrap bold text in bold tags
  );
};

const CustomTypography = ({ text }) => {
  const formattedText = useCustomTypography(text);
  return (
    <Typography sx={{ whiteSpace: "pre-wrap" }}>{formattedText}</Typography>
  );
};

export default CustomTypography;
