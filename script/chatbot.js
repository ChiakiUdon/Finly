const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const responseTimeText = document.getElementById('response-time');

// Array of fake bot replies
const botReplies = [
  "Thank you for using our chatbot! We'll get back to you shortly.",
  "I'm processing your request. Please wait a moment.",
  "Got it! We're looking into that for you.",
  "Thanks for your message. Someone will reply soon!",
  "Your inquiry has been received. Expect a response shortly.",
  "Hang tight! We're working on your question.",
  "Thanks! We're reviewing your message now.",
];

// Randomize estimated time (30 sec to 2 min)
function randomEstimatedTime() {
  const minutes = Math.floor(Math.random() * 2) + 1;
  responseTimeText.textContent = `Estimated time to respond: ${minutes} Minute${minutes > 1 ? 's' : ''}`;
}

// Add message to chat window
function addMessage(message, sender = 'user') {
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Get a random reply from botReplies
function getRandomBotReply() {
  const index = Math.floor(Math.random() * botReplies.length);
  return botReplies[index];
}

sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (!message) return;
  addMessage(message, 'user');
  userInput.value = '';

  // Fake bot reply after delay
  setTimeout(() => {
    const reply = getRandomBotReply();
    addMessage(reply, 'bot');
    randomEstimatedTime(); // Refresh response time
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const responseTime = document.getElementById("response-time");

  const delays = [
    "Less than 1 Minute",
    "1 Minute",
    "2 Minutes",
    "A few moments",
    "Under 30 Seconds"
  ];

  const randomDelay = delays[Math.floor(Math.random() * delays.length)];
  responseTime.textContent = `Estimated time to respond: ${randomDelay}`;
});

// Initialize
randomEstimatedTime();
