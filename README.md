# Project Overview

This project is a **JavaScript Widget** designed to be embedded into third-party websites. Its primary function is to inject a "Product Advisor" chat interface.

## Key Components

### 1. Widget Script (`widget-production.js`)
This is the core standalone script. When loaded on a host page, it performs the following actions:
*   **Launcher Injection**: Adds a floating chat icon (launcher button) to the bottom-right corner of the screen.
*   **Container Injection**: Creates an overlay container that holds an `<iframe>`.
*   **Remote App Loading**: The iframe loads a remote "Product Advisor" application.

*Note: The local version of this script is currently marked as offline.*

### 2. Test Page (`test.html`)
A minimal HTML page used for testing the widget integration. It simulates a host environment by loading the widget script from a live URL.

### 3. Layout Prototype (`test2.html`)
A React-based layout prototype demonstrating a complex page structure (fixed header, scrollable columns). This serves as a testbed to ensure the widget overlays correctly and functions properly within more complex web layouts.
