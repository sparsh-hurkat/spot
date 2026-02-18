"use client";
import { Grid, Box } from "@mui/material";
import TitleContainer from "./Title";
import ChatBox from "./ChatBox";
import { useEffect, useState } from "react";
import Response from "./Response";
import SkillsContainer from "./Skills";
import JourneyContainer from "./Journey";
import ProjectsContainer from "./Projects";
import AboutMeContainer from "./About";
import useChat from "../hooks/useChat";

const HomePage = () => {
  const [isResponseOpen, setResponseOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const { sessionId, messages, setMessages, input, handleInputChange, handleSubmit } =
    useChat();

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = async () => {
    const suggestionsData = await fetchSuggestions();
    setSuggestions(suggestionsData);
  };

  const saveChatHistory = async (chatHistory) => {
    const qaArray: string[] = [];
    for (let i = 0; i < chatHistory.length; i++) {
      const msg = chatHistory[i];
      if (msg.role === "user") {
        qaArray.push(msg.content);
        const nextMsg = chatHistory[i + 1];
        if (nextMsg && nextMsg.role === "assistant") {
          qaArray.push(nextMsg.content);
        }
      }
    }

    await fetch("/api/save-response", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        chatHistory: qaArray,
      }),
    });
  };


  const fetchSuggestions = async () => {
    try {
      const response = await fetch("/api/fetch-suggestions", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  const handleClose = () => {
    if (messages.length > 0) {
      saveChatHistory(messages);
    }
    setResponseOpen(false);
    setMessages([]);
  };

  const handleSubmitChat = (type, event, value) => {
    setResponseOpen(true);
    switch (type) {
      case "SUBMIT_FORM":
        handleSubmit(event);
        break;
      case "SELECT_CARD":
        handleSubmit(event, value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container>
      <Grid item container>
        <Response
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmitChat}
          messages={messages}
          isResponseOpen={isResponseOpen}
          handleClose={handleClose}
        />
        <TitleContainer
          suggestions={suggestions}
          handleSelectCard={handleSubmitChat}
        />
        <JourneyContainer />
        <SkillsContainer />
        <ProjectsContainer />
        <AboutMeContainer />
        <Box sx={{ pointerEvents: isResponseOpen ? "none" : "auto" }}>
          <ChatBox
            handleSubmit={handleSubmitChat}
            input={input}
            handleInputChange={handleInputChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
