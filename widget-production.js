(function () {
    // Widget Configuration
    const CONFIG = {
        iframeUrl: 'https://chatfirst-2026.web.app/',
        // Default theme, though we will override this with gradients
        themeColor: '#007aff',
    };

    // Icon Definitions (SVG Strings)
    const ICONS = {
        chat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        question: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        dollar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
        delivery: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
    };

    // Colors corresponding to icons (Gradients) and LABELS
    const THEMES = [
        { icon: ICONS.chat, label: 'Chat', gradient: 'linear-gradient(135deg, #007aff, #00c6ff)' },      // Blue
        { icon: ICONS.question, label: 'Fale com Especialista', gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' },  // Purple
        { icon: ICONS.dollar, label: 'Orçamento Rápido', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)' },    // Green
        { icon: ICONS.delivery, label: 'Dúvidas sobre Entrega?', gradient: 'linear-gradient(135deg, #f12711, #f5af19)' }   // Orange/Red
    ];

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
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        flex-direction: column;
    }

    #widget-container.is-open {
        transform: translateX(0);
    }

    @media (min-width: 768px) {
        #widget-container {
            width: 50%;
            max-width: 100%;
            box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
        }
    }

    /* --- Launcher Button --- */
    #widget-launcher {
        position: fixed;
        bottom: 40px;
        right: 80px; /* Increased right margin even more */
        width: 60px;
        height: 60px;
        /* Gradient Background */
        background: ${THEMES[0].gradient};
        color: white;
        border-radius: 30px; /* Fully rounded initially */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        /* Transitions for hover expansion, opacity, and background change */
        transition: width 0.3s ease, background 0.5s ease, transform 0.3s ease, opacity 0.5s ease;
        z-index: 2147483648;
        border: none;
        outline: none;

        /* Entrance Animation: Start invisible and translated down */
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        pointer-events: none;
    }

    /* Active/Visible State (Triggered after 5s) */
    #widget-launcher.is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
        /* Only animate "bobbing" once visible */
        animation: widget-bob 8s infinite ease-in-out; 
    }

    /* Bobbing Animation: Quick move, then wait */
    @keyframes widget-bob {
        0%, 5% { transform: translateY(0); }
        10% { transform: translateY(-10px); }
        15% { transform: translateY(0); }
        20% { transform: translateY(-5px); }
        25% { transform: translateY(0); }
        100% { transform: translateY(0); } /* Wait for the rest */
    }

    /* Ripple Effect */
    #widget-launcher::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background: inherit;
        z-index: -1;
        opacity: 0.6;
        animation: widget-ripple 2s infinite;
    }

    @keyframes widget-ripple {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.6); opacity: 0; }
    }

    /* Hover State: Expand */
    /* Increased width to fit longer Portuguese text like "Fale com Especialista" */
    #widget-launcher:hover {
        width: 260px;
        /* Pause bobbing on hover so it doesn't look jittery */
        animation-play-state: paused; 
    }

    /* Launcher Content Wrapper */
    .launcher-content {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        white-space: nowrap;
    }

    /* Icon Styling */
    .launcher-icon {
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 1;
        position: relative;
        z-index: 5;
    }

    .launcher-icon.is-fading {
        opacity: 0;
        transform: scale(0.5);
    }

    /* Text Label (Hidden by default) */
    .launcher-label {
        max-width: 0;
        opacity: 0;
        margin-left: 0;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
    }

    /* Show Text on Hover */
    #widget-launcher:hover .launcher-label {
        max-width: 200px;
        opacity: 1;
        margin-left: 10px;
    }

    #widget-launcher.is-hidden {
        opacity: 0;
        pointer-events: none;
        transform: scale(0.8);
    }

    /* --- Notification Badge --- */
    #widget-notification {
        position: absolute;
        top: -2px;
        right: -2px;
        width: 16px;
        height: 16px;
        background-color: #ff3b30;
        border: 2px solid white;
        border-radius: 50%;
        /* Hidden initially */
        opacity: 0;
        transform: scale(0);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        z-index: 10;
    }

    #widget-notification.is-active {
        opacity: 1;
        transform: scale(1);
    }

    /* --- Close Button --- */
    #widget-close {
        position: absolute;
        top: 15px;
        left: -50px;
        width: 30px;
        height: 30px;
        background-color: white; /* Ensure white background on all devices */
        color: #333;
        border: 2px solid #14293D; /* Added requested border */
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

    #widget-container.is-open #widget-close {
        opacity: 1;
        pointer-events: auto;
    }

    @media (max-width: 767px) {
        #widget-close {
            left: auto;
            right: 15px;
            top: 5px; /* Updated: touches top with 5px margin */
            /* Removed transparent background override so it stays white */
            /* Removed box-shadow: none so it keeps the shadow or border visibility */
        }

        #widget-launcher {
            right: 35px;
            bottom: 35px;
        }
    }

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
        <div id="widget-notification"></div>
        <div class="launcher-content">
            <div class="launcher-icon" id="launcher-icon-container">
                ${ICONS.chat}
            </div>
            <span class="launcher-label">Chat</span>
        </div>
    </button>
    `;

    const containerHTML = `
    <div id="widget-container">
        <button id="widget-close" aria-label="Close chat widget">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

        // 3. Select Elements
        const launcher = document.getElementById('widget-launcher');
        const container = document.getElementById('widget-container');
        const closeBtn = document.getElementById('widget-close');
        const iconContainer = document.getElementById('launcher-icon-container');
        const notification = document.getElementById('widget-notification');
        const label = launcher.querySelector('.launcher-label');

        // 4. Logic & Interactions

        // Open/Close
        function openWidget() {
            container.classList.add('is-open');
            launcher.classList.add('is-hidden');
            // Hide notification when opened
            notification.classList.remove('is-active');
        }

        function closeWidget() {
            container.classList.remove('is-open');
            launcher.classList.remove('is-hidden');
        }

        launcher.addEventListener('click', openWidget);
        closeBtn.addEventListener('click', closeWidget);

        // Entrance Animation (Wait 5 seconds)
        setTimeout(() => {
            launcher.classList.add('is-visible');
        }, 5000);

        // Notification Badge (Wait 20 seconds)
        setTimeout(() => {
            notification.classList.add('is-active');
        }, 20000);

        // Icon & Theme Cycling
        let currentThemeIndex = 0;

        setInterval(() => {
            // Only cycle if not hovering (to avoid jarring changes during interaction)
            if (!launcher.matches(':hover') && !launcher.classList.contains('is-hidden')) {
                currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
                currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
                const theme = THEMES[currentThemeIndex];

                // Fade out icon
                iconContainer.classList.add('is-fading');

                setTimeout(() => {
                    // Change Icon, Text, and Background
                    iconContainer.innerHTML = theme.icon;
                    label.textContent = theme.label;
                    launcher.style.background = theme.gradient;

                    // Fade in icon
                    iconContainer.classList.remove('is-fading');
                }, 300);
            }
        }, 3000); // Change every 3 seconds
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectWidget);
    } else {
        injectWidget();
    }

})();