document.getElementById('discussion-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText) {
        
        const messageList = document.getElementById('message-list');
        const messageItem = document.createElement('li');
        messageItem.className = 'message-item';
        messageItem.textContent = messageText;

        messageList.appendChild(messageItem);

        messageInput.value = '';
    }
});