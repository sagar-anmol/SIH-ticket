// src/app/chatbot/Options.js
import React from "react";

const Options = (props) => {
  const options = [
    { text: "Museum Entry", handler: () => props.actionProvider.handleEventSelection("Museum Entry"), id: 1 },
    { text: "Art Gallery", handler: () => props.actionProvider.handleEventSelection("Art Gallery"), id: 2 },
    { text: "Science Exhibition", handler: () => props.actionProvider.handleEventSelection("Science Exhibition"), id: 3 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button key={option.id} onClick={option.handler}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
