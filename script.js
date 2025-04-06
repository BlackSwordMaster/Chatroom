function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  // 1. Add to permanent message history
  const historyEntry = document.createElement('div');
  historyEntry.className = 'entry user';
  historyEntry.textContent = text;
  document.getElementById('chatHistory').appendChild(historyEntry);

  // 2. Show comic-style bubble above avatar
  const bubble = document.createElement('div');
  bubble.className = 'speech user-bubble';
  bubble.textContent = text;
  document.getElementById('speechBubbles').appendChild(bubble);

  // 3. Clear input
  input.value = '';

  // 4. Auto-remove bubble after 4 seconds
  setTimeout(() => {
    bubble.remove();
  }, 4000);
}

// Enter key triggers send
document.getElementById('chatInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});