// src/app/page.js
"use client";

import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import botConfig from "./chatbot/botConfig";

export default function Page() {
  return (
    <div>
      <h1>Museum Ticket Booking Chatbot</h1>
      <Chatbot 
        config={botConfig} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser} 
      />
    </div>
  );
}
