// src/app/chatbot/botConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";

const botConfig = {
  initialMessages: [
    createChatBotMessage("Welcome! Please select an event or type a custom one:", {
      widget: "eventOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "eventOptions",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default botConfig;
