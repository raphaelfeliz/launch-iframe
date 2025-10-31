(function () {
  // prevent double load
  if (window.__chatbotWidgetLoaded) return;
  window.__chatbotWidgetLoaded = true;

  console.log("Chatbot widget script loaded");

  function initWidget() {
    if (!document.body) {
      console.error("Chatbot widget: document.body not ready");
      return;
    }

    // create chat button
    const chatButton = document.createElement("button");
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.width = "60px";
    chatButton.style.height = "60px";
    chatButton.style.borderRadius = "50%";
    chatButton.style.backgroundColor = "#007bff";
    chatButton.style.color = "#fff";
    chatButton.style.border = "none";
    chatButton.style.cursor = "pointer";
    chatButton.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    chatButton.style.zIndex = "9999";
    chatButton.style.fontSize = "28px";
    chatButton.style.display = "flex";
    chatButton.style.alignItems = "center";
    chatButton.style.justifyContent = "center";
    chatButton.style.transition = "transform 0.2s ease";
    chatButton.innerHTML = "💬";
    chatButton.setAttribute("aria-label", "Open chat");

    // container
    const chatContainer = document.createElement("div");
    chatContainer.style.position = "fixed";
    chatContainer.style.top = "0";
    chatContainer.style.right = "-800px";
    chatContainer.style.width = "800px";
    chatContainer.style.height = "100vh";
    chatContainer.style.backgroundColor = "#fff";
    chatContainer.style.boxShadow = "0 0 30px rgba(0,0,0,0.2)";
    chatContainer.style.transition = "right 0.3s ease";
    chatContainer.style.zIndex = "9998";

    // figure out iframe src
    const currentScript = document.currentScript;
    const dataSrc = currentScript && currentScript.getAttribute("data-bot");
    const defaultSrc =
      "https://hybrid-product-advisor-widget-v3-632357271427.us-west1.run.app/";
    const iframeSrc = dataSrc || defaultSrc;

    const iframe = document.createElement("iframe");
    iframe.src = iframeSrc;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "15px";
    closeButton.style.width = "32px";
    closeButton.style.height = "32px";
    closeButton.style.borderRadius = "50%";
    closeButton.style.border = "none";
    closeButton.style.background = "rgba(255,255,255,0.9)";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "18px";
    closeButton.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
    closeButton.style.zIndex = "10000";

    chatContainer.appendChild(iframe);
    chatContainer.appendChild(closeButton);
    document.body.appendChild(chatButton);
    document.body.appendChild(chatContainer);

    console.log("Chat button and container added to DOM");

    let isOpen = false;

    function toggleChat() {
      isOpen = !isOpen;
      if (isOpen) {
        chatContainer.style.right = "0px";
        chatButton.style.transform = "scale(0.9)";
      } else {
        chatContainer.style.right = "-800px";
        chatButton.style.transform = "scale(1)";
      }
    }

    chatButton.addEventListener("click", toggleChat);
    closeButton.addEventListener("click", toggleChat);

    chatButton.addEventListener("mouseenter", () => {
      if (!isOpen) chatButton.style.transform = "scale(1.1)";
    });
    chatButton.addEventListener("mouseleave", () => {
      if (!isOpen) chatButton.style.transform = "scale(1)";
    });

    console.log("Chatbot widget initialized successfully");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWidget);
  } else {
    initWidget();
  }
})();