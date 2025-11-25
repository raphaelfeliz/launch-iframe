(function () {
    // Widget Configuration
    const CONFIG = {
        iframeUrl: 'https://chat-first-commerce.web.app/',
        themeColor: '#007aff',
    };

    // CSS Styles
    const styles = `
        /* --- Widget Container (Drawer) --- */
        #widget-container {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-color: white;
            box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
            z-index: 2147483647;
            transform: translateX(100%); /* Start hidden (collapsed) */
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            display: flex;
            flex-direction: column;
        }

        #widget-container.is-open {
            transform: translateX(0); /* Slide in (expand) */
        }

        /* Desktop Overrides: Max width for the drawer */
        @media (min-width: 768px) {
            #widget-container {
                width: 60%; /* Take 60% of the page width */
                max-width: 100%;
                box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow for larger surface */
            }
        }

        /* --- Launcher Button --- */
        #widget-launcher {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background-color: ${CONFIG.themeColor};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: transform 0.2s ease, opacity 0.2s ease;
            z-index: 2147483648; /* Above the container */
            border: none;
            outline: none;
        }

        #widget-launcher:hover {
            transform: scale(1.05);
        }

        #widget-launcher.is-hidden {
            opacity: 0;
            pointer-events: none;
            transform: scale(0.8);
        }

        /* Launcher Icon */
        #widget-launcher svg {
            width: 28px;
            height: 28px;
        }

        /* --- Close Button (Inside Container) --- */
        #widget-close {
            position: absolute;
            top: 15px;
            left: -50px; /* Positioned outside the drawer on desktop if desired, or inside */
            width: 40px;
            height: 40px;
            background-color: white;
            color: #333;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            z-index: 2147483649;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        /* Show close button when open */
        #widget-container.is-open #widget-close {
            opacity: 1;
            pointer-events: auto;
        }
        
        /* Mobile: Close button inside the top bar */
        @media (max-width: 767px) {
             #widget-close {
                left: auto;
                right: 15px;
                top: 15px;
                background-color: transparent;
                box-shadow: none;
             }
        }

        /* --- Iframe --- */
        #widget-iframe {
            width: 100%;
            height: 100%;
            border: none;
            flex: 1;
        }
    `;

    // HTML Structure
    const launcherHTML = `
        <button id="widget-launcher" aria-label="Open chat widget">
            <!-- Chat Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </button>
    `;

    const containerHTML = `
        <div id="widget-container">
            <button id="widget-close" aria-label="Close chat widget">
                <!-- Close Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <iframe 
                id="widget-iframe"
                src="${CONFIG.iframeUrl}"
                title="Chat Widget"
                allow="camera; microphone; autoplay; encrypted-media;">
            </iframe>
        </div>
    `;

    function injectWidget() {
        // 1. Inject CSS
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);

        // 2. Inject HTML
        const wrapper = document.createElement('div');
        wrapper.id = 'widget-wrapper';
        wrapper.innerHTML = launcherHTML + containerHTML;
        document.body.appendChild(wrapper);

        // 3. Event Listeners
        const launcher = document.getElementById('widget-launcher');
        const container = document.getElementById('widget-container');
        const closeBtn = document.getElementById('widget-close');

        function openWidget() {
            container.classList.add('is-open');
            launcher.classList.add('is-hidden');
        }

        function closeWidget() {
            container.classList.remove('is-open');
            launcher.classList.remove('is-hidden');
        }

        launcher.addEventListener('click', openWidget);
        closeBtn.addEventListener('click', closeWidget);

        // Optional: Close when clicking outside (if we add an overlay)
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectWidget);
    } else {
        injectWidget();
    }

})();
