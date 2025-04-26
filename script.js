const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatResponse = document.getElementById('chat-response');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  chatResponse.innerHTML = "Thinking...";

  try {
    const response = await fetch('https://crimznbot.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    if (response.ok) {
      const data = await response.json();
      chatResponse.innerHTML = data.reply || "No response received.";
    } else {
      chatResponse.innerHTML = "Error: Could not fetch response.";
    }
  } catch (error) {
    chatResponse.innerHTML = "Error fetching response.";
  }

  userInput.value = '';
});
