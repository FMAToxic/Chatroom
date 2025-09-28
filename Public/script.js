// public/script.js
const socket = io();
const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');
const usernameInput = document.getElementById('username');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const message = input.value.trim();

  if (!username || !message) return;

  socket.emit('chat message', {
    username,
    message
  });

  input.value = '';
});

socket.on('chat message', function (data) {
  const item = document.createElement('div');
  item.textContent = `${data.username}: ${data.message}`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

