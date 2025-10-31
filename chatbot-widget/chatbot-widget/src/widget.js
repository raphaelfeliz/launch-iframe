// Create the chatbot button
const button = document.createElement('button');
button.innerText = 'Chat with us';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#007bff';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Create the full-height div
const chatDiv = document.createElement('div');
chatDiv.style.position = 'fixed';
chatDiv.style.top = '0';
chatDiv.style.left = '0';
chatDiv.style.width = '100%';
chatDiv.style.height = '100%';
chatDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
chatDiv.style.display = 'none';
chatDiv.style.zIndex = '999';

// Append the button and div to the body
document.body.appendChild(button);
document.body.appendChild(chatDiv);

// Add click event to the button
button.addEventListener('click', () => {
    if (chatDiv.style.display === 'none') {
        chatDiv.style.display = 'block';
    } else {
        chatDiv.style.display = 'none';
    }
});