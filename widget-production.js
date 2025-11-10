// WIDGET TEMPORARILY OFFLINE
/*
(function() {
    // This is an IIFE (Immediately Invoked Function Expression)
    // It runs immediately and keeps variables private from the host page.

    // 1. Define the CSS styles as a string
    
    const styles = `
        /* --- Widget Container Styling --- */
        #widget-container {
            display: none; 
            position: fixed;
            background-color: white;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            border-radius: 0;
            z-index: 2147483647;
        }

        /* Desktop Overrides */
        @media (min-width: 768px) {
            #widget-container {
                width: 100%;
                height: 100vh;
                max-width: 800px;
                top: 0;
                right: 0;
                left: auto;
                transform: none;
                border-radius: 0; 
            }
        }

        /* --- Launcher Button Styling --- */
        #widget-launcher {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background-color: #007aff;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.2s ease-in-out;
            z-index: 2147483646;
            border: none;
        }

        #widget-launcher:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
        
        /* Launcher Icon SVG */
        #widget-launcher svg {
             width: 28px;
             height: 28px;
        }

        /* --- Iframe Styling --- */
        #widget-iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        /* --- Close Button Styling --- */
        #widget-close {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 32px;
            height: 32px;
            background-color: #e0e0e0;
            color: #555;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            z-index: 2147483647;
            transition: background-color 0.2s;
        }

        #widget-close:hover {
            background-color: #cccccc;
        }
    `;

    // 2. Define the HTML for the widget elements
    const launcherHTML = `
        <button id="widget-launcher" aria-label="Open chat widget">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </button>
    `;

    const containerHTML = `
        <div id="widget-container">
            <button id="widget-close" aria-label="Close chat widget">&times;</button>
            <iframe 
                id="widget-iframe"
                src="https://hybrid-product-advisor-widget-v3-1-253278659379.us-west1.run.app/"
                title="Product Advisor Widget">
            </iframe>
        </div>
    `;

    // 3. Create a function to inject everything into the page
    function injectWidget() {
        // Inject CSS
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);

        // Inject HTML
        // We create a temporary div to add the HTML, then append the children
        // to the body to avoid wiping out the existing page.
        const launcherDiv = document.createElement('div');
        launcherDiv.innerHTML = launcherHTML;
        document.body.appendChild(launcherDiv.firstElementChild);

        const containerDiv = document.createElement('div');
        containerDiv.innerHTML = containerHTML;
        document.body.appendChild(containerDiv.firstElementChild);

        // 4. Add event listeners
        const launcher = document.getElementById('widget-launcher');
        const container = document.getElementById('widget-container');
        const closeButton = document.getElementById('widget-close');

        if (launcher && container && closeButton) {
            launcher.addEventListener('click', () => {
                container.style.display = 'block';
                launcher.style.display = 'none';
            });

            closeButton.addEventListener('click', () => {
                container.style.display = 'none';
                launcher.style.display = 'flex';
            });
        }
    }

    // 5. Run the injection function
    // We wait for the DOM to be fully loaded to ensure document.body exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectWidget);
    } else {
        // DOMContentLoaded has already fired
        injectWidget();
    }

})();
*/
