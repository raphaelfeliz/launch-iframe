(function() {
  // Prevent double load
  if (window.__chatbotWidgetLoaded) return;
  window.__chatbotWidgetLoaded = true;

  // VERSION LOG - Updated: 2025-10-31 11:35 - Mobile hidden (<=768px)
  console.log('Chatbot widget v1.2.0 loaded - Mobile hidden version');
  console.log('Widget script loaded');

  function initWidget() {
    if (!document.body) {
      console.error('Chatbot widget: document.body not ready');
      return;
    }

    // --- 1. Create Elements ---

    // Create the chat launcher button
    const chatButton = document.createElement('button');
    chatButton.id = 'chatbot-widget-button';
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
      font-size: 28px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
    `;
    chatButton.setAttribute('aria-label', 'Open chat');

    // Create the chat container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatbot-widget-container';
    chatContainer.style.cssText = `
      /* Common styles */
      top: 0;
      width: 100%;
      max-width: 800px;
      background-color: #3c434f;
      z-index: 9999;
      box-sizing: border-box;
      transition: right 0.3s ease, transform 0.3s ease;
      box-shadow: 0 0 30px rgba(0,0,0,0.2);
    `;

    // Create iframe
    const currentScript = document.currentScript;
    const dataSrc = currentScript && currentScript.getAttribute('data-bot');
    const defaultSrc = 'https://hybrid-product-advisor-widget-v3-632357271427.us-west1.run.app/';
    const iframeSrc = dataSrc || defaultSrc;

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      margin: 0;
      padding: 0;
    `;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×'; // '×' is the multiplication sign
    closeButton.style.cssText = `
      position: absolute;
      top: 10px;
      right: 15px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: rgba(255,255,255,0.9);
      cursor: pointer;
      font-size: 18px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    // --- 2. Append Elements ---
    chatContainer.appendChild(iframe);
    chatContainer.appendChild(closeButton);
    document.body.appendChild(chatButton);
    document.body.appendChild(chatContainer);

    // --- 3. State and Logic ---
    let isOpen = false;

    // This function contains the responsive logic
    function applyResponsiveStyles() {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // --- MOBILE: Hide widget completely ---
        chatButton.style.display = 'none';
        chatContainer.style.display = 'none';
      } else {
        // --- DESKTOP: Fixed, 100vh, Right-aligned ---
        chatButton.style.display = 'flex';
        chatContainer.style.display = 'block';
        chatContainer.style.position = 'fixed';
        chatContainer.style.height = '100vh';
        chatContainer.style.left = 'auto';
        chatContainer.style.transform = 'none';
        
        if (isOpen) {
          chatContainer.style.right = '0'; // Show
        } else {
          chatContainer.style.right = '-800px'; // Hide (slide right)
        }
      }
    }

    // Toggle function
    function toggleChat() {
      isOpen = !isOpen;
      applyResponsiveStyles();
      chatButton.style.transform = isOpen ? 'scale(0.9)' : 'scale(1)';
    }

    // --- 4. Event Listeners ---
    chatButton.addEventListener('click', toggleChat);
    closeButton.addEventListener('click', toggleChat);

    // Hover effects
    chatButton.addEventListener('mouseenter', () => {
      if (!isOpen) chatButton.style.transform = 'scale(1.1)';
    });
    chatButton.addEventListener('mouseleave', () => {
      if (!isOpen) chatButton.style.transform = 'scale(1)';
    });

    // Re-apply styles on window resize
    window.addEventListener('resize', applyResponsiveStyles);

    // --- 5. Initial Run ---
    applyResponsiveStyles(); // Apply initial (hidden) state
    console.log('Chatbot widget initialized successfully');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();