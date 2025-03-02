"use client";
import { Grid } from "@mui/material";
import TitleContainer from "./Title";
import ChatBox from "./ChatBox";
import { useEffect, useState } from "react";
import Response from "./Response";
import SkillsContainer from "./Skills";
import useDidUpdateEffect from "../hooks/useDidUpdateEffect";
import JourneyContainer from "./Journey";
import ProjectsContainer from "./Projects";
import AboutMeContainer from "./About";
import useChat from "../hooks/useChat";

const HomePage = () => {
  const [isResponseOpen, setResponseOpen] = useState(false);
  const [lastGeneratedResponse, setLastGeneratedResponse] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const { messages, setMessages, input, handleInputChange, handleSubmit } =
    useChat({
      onFinish: (message) => {
        setLastGeneratedResponse(message);
      },
    });

  useEffect(() => {
    loadSuggestions();
  }, []);

  useDidUpdateEffect(() => {
    if (!!lastGeneratedResponse) {
      saveResponse(messages.at(-2)?.content, lastGeneratedResponse);
      setLastGeneratedResponse(null);
    }
  }, [lastGeneratedResponse]);

  const loadSuggestions = async () => {
    const suggestionsData = await fetchSuggestions();
    setSuggestions(suggestionsData);
  };

  const saveResponse = async (query, response) => {
    await fetch("/api/save-response", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query,
        response,
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
        <ChatBox
          handleSubmit={handleSubmitChat}
          input={input}
          handleInputChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
