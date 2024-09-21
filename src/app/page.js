// src/app/page.js

"use client";  // Ensure it's a client component

import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import botConfig from "./chatbot/botConfig";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-500 to-pink-600 flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">🎟️ Museum Ticket Booking Chatbot</h1>
        <p className="text-center text-lg text-gray-500">
          Welcome! Please select or type an event to book tickets.
        </p>
        <div className="chatbot-container">
          <Chatbot 
            config={botConfig} 
            actionProvider={ActionProvider} 
            messageParser={MessageParser} 
          />
        </div>
      </div>
    </div>
  );
}
