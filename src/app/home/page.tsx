"use client";
import { Grid } from "@mui/material";
import TitleContainer from "./Title";
import ProjectsContainer from "./Projects";
import ChatBox from "./ChatBox";
import { useState } from "react";
import Response from "./Response";
import SkillsContainer from "./Skills";
import { useChat } from "ai/react";

const HomePage = () => {
  const [isResponseOpen, setResponseOpen] = useState(false);

  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    append,
  } = useChat();
  const handleOpen = (args: any) => {
    setResponseOpen(true);
    handleSubmit(args);
  };
  const handleClose = () => {
    setResponseOpen(false);
    setMessages([]);
  };
  const handleSelectCard = (value: string) => {
    setResponseOpen(true);
    append({
      role: "user",
      content: value,
    });
  };

  return (
    <Grid container>
      <Grid item container>
        <Response
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          messages={messages}
          isResponseOpen={isResponseOpen}
          handleClose={handleClose}
        />
        <TitleContainer handleSelectCard={handleSelectCard} />
        <ProjectsContainer />
        <SkillsContainer />
        <ChatBox
          handleSubmit={handleOpen}
          input={input}
          handleInputChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
