
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('chat-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const input = document.getElementById('user-input');
        const userText = input.value.trim();
        if (userText === "") return;

        displayMessage(userText, 'user');
        input.value = '';

        setTimeout(() => {
            const response = getBotReply(userText);
            displayMessage(response, 'bot');
        }, 800);
    });

    function displayMessage(msg, sender) {
        const container = document.getElementById('chat-container');
        const message = document.createElement('div');
        message.className = `${sender}-message`;
        message.textContent = msg;
        container.appendChild(message);
        container.scrollTop = container.scrollHeight;
    }

    function getBotReply(input) {
        const replies = {
            "hello!": "Hi! How can I help you today?",
            "how are you?": "I'm just a bot, but I'm functioning perfectly!",
            "bye!": "See you soon!",
        };
        return replies[input.toLowerCase()] || "I didn't understand that. Try asking something else!";
    }
});
