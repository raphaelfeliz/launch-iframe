(function() {
  // Prevent double load
  if (window.__chatbotWidgetLoaded) return;
  window.__chatbotWidgetLoaded = true;

  // VERSION LOG - Replace existing div version
  console.log('Chatbot widget v2.0.0 loaded - Replace div version');
  console.log('Widget script loaded');

  function initWidget() {
    // Find the target div
    const targetDiv = document.getElementById('pageContent');
    
    if (!targetDiv) {
      console.error('Chatbot widget: div with id="pageContent" not found');
      return;
    }

    console.log('Found pageContent div, replacing content...');

    // Empty the existing div
    targetDiv.innerHTML = '';

    // Get iframe source
    const currentScript = document.currentScript;
    const dataSrc = currentScript && currentScript.getAttribute('data-bot');
    const defaultSrc = 'https://hybrid-product-advisor-widget-v3-632357271427.us-west1.run.app/';
    const iframeSrc = dataSrc || defaultSrc;

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      margin: 0;
      padding: 0;
      display: block;
    `;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');

    // Make sure the parent div fills available space
    targetDiv.style.cssText = `
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    `;

    // Append iframe to the target div
    targetDiv.appendChild(iframe);

    console.log('Chatbot widget initialized - pageContent replaced with iframe');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();