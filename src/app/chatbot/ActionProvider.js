// src/app/chatbot/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleEventSelection = (event) => {
      const message = this.createChatBotMessage(`You selected "${event}". How many tickets would you like?`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleCustomEvent = (customEvent) => {
      const message = this.createChatBotMessage(`You selected a custom event: "${customEvent}". How many tickets?`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handlePayment = (amount) => {
      const message = this.createChatBotMessage(`Your total is ₹${amount}. Proceeding to payment...`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
  
      // Call Razorpay integration for payment
      this.triggerRazorpayPayment(amount);
    };
  
    triggerRazorpayPayment = (amount) => {
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: amount * 100, // Convert to paise
        currency: "INR",
        name: "Museum Ticket Booking",
        description: "Museum Event Ticket",
        handler: (response) => {
          this.createChatBotMessage(`Payment successful! Your ticket is confirmed.`);
        },
        theme: {
          color: "#F37254",
        },
      };
  
      const rzp = new Razorpay(options);
      rzp.open();
    };
  }
  
  export default ActionProvider;
  