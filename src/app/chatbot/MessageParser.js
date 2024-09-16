// src/app/chatbot/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("museum") || lowerCaseMessage.includes("gallery")) {
        this.actionProvider.handleEventSelection(message);
      } else if (!isNaN(lowerCaseMessage)) {
        this.actionProvider.handlePayment(parseInt(message));
      } else {
        this.actionProvider.handleCustomEvent(message);
      }
    }
  }
  
  export default MessageParser;
  