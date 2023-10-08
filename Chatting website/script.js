// JavaScript for Chatting Website

// Function to handle sending a message
function sendMessage() {
    var input = document.querySelector('input[type="text"]');
    var message = input.value;

    // Create a new chat bubble for the user message
    var userBubble = document.createElement('div');
    userBubble.classList.add('chat-bubble', 'user-message');
    userBubble.innerHTML = `
      <img class="user-avatar" src="user-avatar.png" alt="User Avatar">
      <div class="message">
        <span class="timestamp">${getCurrentTime()}</span>
        <p>${message}</p>
      </div>
    `;

    var chatContainer = document.querySelector('.chat-container');
    chatContainer.appendChild(userBubble);

    // Clear the input field
    input.value = '';

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulate assistant's response after a delay (replace this with your own logic)
    setTimeout(function () {
        receiveMessage('I received your message: ' + message);
    }, 1000);
}

// Function to handle receiving a message
function receiveMessage(message) {
    // Create a new chat bubble for the assistant message
    var assistantBubble = document.createElement('div');
    assistantBubble.classList.add('chat-bubble', 'assistant-message');
    assistantBubble.innerHTML = `
      <img class="user-avatar" src="assistant-avatar.png" alt="Assistant Avatar">
      <div class="message">
        <span class="timestamp">${getCurrentTime()}</span>
        <p>${message}</p>
      </div>
    `;

    var chatContainer = document.querySelector('.chat-container');
    chatContainer.appendChild(assistantBubble);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to get the current time in HH:MM format
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}

// Event listener for sending a message when the "Send" button is clicked
document.querySelector('button').addEventListener('click', function () {
    sendMessage();
});

// Event listener for sending a message when the Enter key is pressed in the input field
document.querySelector('input[type="text"]').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
