import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Messages {
  id: string;
  role: string;
  content: string;
}

const useChat = (props) => {
  const { onFinish } = props;
  const [messages, setMessages] = useState<Messages[]>([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: any, value?: string) => {
    event && event.preventDefault();

    const userMessage = value ?? input;
    setInput("");

    addUserMessage(userMessage);
    addLoaderMessage();

    try {
      const response = await sendMessageToAPI(userMessage);
      const result = await readStream(response);

      updateAssistantMessage(result);
    } catch (error) {
      console.error("Error fetching response:", error);
      updateAssistantMessage("Oops! Something went wrong. Please try again.");
    }
  };

  // Function to add the user's message
  const addUserMessage = (message: string) => {
    const userMessage = {
      id: uuidv4(),
      role: "user",
      content: message,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  };

  // Function to add a loader message
  const addLoaderMessage = () => {
    const loaderMessage = {
      id: "loading",
      role: "assistant",
      content: "Thinking...",
    };
    setMessages((prevMessages) => [...prevMessages, loaderMessage]);
  };

  // Function to send the message to the API
  const sendMessageToAPI = async (message: string) => {
    return fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          ...messages,
          { id: uuidv4(), role: "user", content: message },
        ],
      }),
    });
  };

  // Function to read the response stream
  const readStream = async (response: Response) => {
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let result = "";

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
      }
    }
    return result;
  };

  // Function to update assistant's message
  const updateAssistantMessage = (message: string) => {
    onFinish(message);
    setMessages((prevMessages) =>
      prevMessages
        .filter((msg) => msg.id !== "loading") // Remove loader
        .concat({
          id: uuidv4(),
          role: "assistant",
          content: message,
        })
    );
  };

  return {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
  };
};

export default useChat;
