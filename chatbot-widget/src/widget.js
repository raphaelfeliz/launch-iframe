(function() {
    // Avoid conflicts with existing variables
    console.log('Chatbot widget script loaded');
    
    // Ensure DOM is ready
    function initWidget() {
        console.log('Initializing chatbot widget...');
        
        if (!document.body) {
            console.error('document.body not available');
            return;
        }
        
        // Create the chatbot button
    const chatButton = document.createElement('button');
    chatButton.innerText = '💬';
    chatButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #007bff;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    // Create the chat container
    const chatContainer = document.createElement('div');
    chatContainer.style.cssText = `
        position: fixed;
        top: 0;
        right: -800px;
        width: 800px;
        height: 100vh;
        background-color: white;
        z-index: 9998;
        transition: right 0.3s ease;
        box-shadow: -2px 0 10px rgba(0,0,0,0.3);
        border-left: 1px solid #ddd;
    `;
    
    // Create the iframe (full height, no margins)
    const iframe = document.createElement('iframe');
    iframe.src = 'https://hybrid-product-advisor-widget-v3-632357271427.us-west1.run.app/';
    iframe.style.cssText = `
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0;
        margin: 0;
        padding: 0;
        display: block;
    `;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');
    
    // Create close button (overlays on top of iframe)
    const closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #ddd;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 18px;
        cursor: pointer;
        color: #666;
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    `;
    
    // Append elements
    chatContainer.appendChild(iframe);
    chatContainer.appendChild(closeButton);
    document.body.appendChild(chatButton);
    document.body.appendChild(chatContainer);
    
    console.log('Chat button and container added to DOM');
    
    // State management
    let isOpen = false;
    
    // Toggle chat function
    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            chatContainer.style.right = '0px';
            chatButton.style.transform = 'scale(0.9)';
        } else {
            chatContainer.style.right = '-800px';
            chatButton.style.transform = 'scale(1)';
        }
    }
    
    // Event listeners
    chatButton.addEventListener('click', toggleChat);
    closeButton.addEventListener('click', toggleChat);
    
    // Hover effects
    chatButton.addEventListener('mouseenter', function() {
        if (!isOpen) this.style.transform = 'scale(1.1)';
    });
    
    chatButton.addEventListener('mouseleave', function() {
        if (!isOpen) this.style.transform = 'scale(1)';
    });
    
    console.log('Chatbot widget initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
} else {
    initWidget();
}

})();