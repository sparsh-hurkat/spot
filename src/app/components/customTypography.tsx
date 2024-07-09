import { Link, Typography } from "@mui/material";
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
  let formattedText = useCustomTypography(text);

  // Replace "THISISSKILLSKEY" with a Link component
  formattedText = formattedText.map((part, index) => {
    if (typeof part === "string") {
      if (part.includes("THISISSKILLSKEY")) {
        return (
          <React.Fragment key={`link-${index}`}>
            {part.split("THISISSKILLSKEY").map((subPart, subIndex, array) => (
              <React.Fragment key={subIndex}>
                {subPart}
                {subIndex !== array.length - 1 && (
                  <Link href="#skills">Click here to know more</Link>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      } else if (part.includes("THISISPROJECTSKEY")) {
        return (
          <React.Fragment key={`link-${index}`}>
            {part.split("THISISPROJECTSKEY").map((subPart, subIndex, array) => (
              <React.Fragment key={subIndex}>
                {subPart}
                {subIndex !== array.length - 1 && (
                  <Link href="#projects">Click here to know more</Link>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      } else {
        return part;
      }
    } else {
      return part;
    }
  });
  return (
    <Typography sx={{ whiteSpace: "pre-wrap" }}>{formattedText}</Typography>
  );
};

export default CustomTypography;
