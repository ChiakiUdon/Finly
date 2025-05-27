const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const responseTimeText = document.getElementById('response-time');

// Randomize estimated time (30 sec to 2 min)
function randomEstimatedTime() {
  const minutes = Math.floor(Math.random() * 2) + 1;
  responseTimeText.textContent = `Estimated time to respond: ${minutes} Minute${minutes > 1 ? 's' : ''}`;
}

function addMessage(message, sender = 'user') {
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (!message) return;
  addMessage(message, 'user');
  userInput.value = '';

  // Fake bot reply after delay
  setTimeout(() => {
    addMessage("Thank you! We'll get back to you shortly.", 'bot');
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
