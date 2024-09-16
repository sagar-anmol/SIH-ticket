// src/app/razorpay.js
export function triggerRazorpayPayment(amount) {
    const options = {
      key: "FDFKBksKCfPXBrTWLL8rQAme",
      amount: amount * 100,
      currency: "INR",
      name: "Museum Ticket Booking",
      description: "Museum Event Ticket",
      handler: function (response) {
        alert("Payment successful! Your order ID is: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp = new Razorpay(options);
    rzp.open();
  }
  