function handleTyping() {
    const userAvatar = document.querySelector('.user-avatar');
    if (!userAvatar.classList.contains('wiggle')) {
      userAvatar.classList.add('wiggle');
    }
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      userAvatar.classList.remove('wiggle');
    }, 1000);
  }
  
  function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
  
    const container = document.createElement('div');
    container.className = 'message-container user';
  
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = text;
  
    container.appendChild(message);
    document.getElementById('chatMessages').prepend(container); // prepend for bottom-up stack
  
    input.value = '';
    handleTyping();
  }