# Simple Chatbot Widget

A minimal, embeddable chatbot widget that adds a floating chat button to any webpage. When clicked, it opens an 800px wide, full-height chat panel that slides in from the right.

## Features

- 🎯 **Simple**: Just one JavaScript file, no dependencies
- 📱 **Responsive**: Works on desktop and mobile
- ✨ **Smooth animations**: Slide-in/out transitions
- 🎨 **Clean design**: Modern floating button with emoji icon
- 🔧 **Easy to customize**: All styles can be overridden
- 📦 **Self-contained**: No external libraries required

## Quick Start

### Embed on Any Website

Simply add this single line to your HTML:

```html
<script src="widget.js"></script>
```

That's it! The widget will automatically:
- Create a floating chat button in the bottom-right corner
- Add the slide-out chat panel functionality
- Handle all interactions and animations

### Demo

Open `src/index.html` in your browser to see the widget in action.

## Files

- **`src/widget.js`** - The complete widget implementation (standalone)
- **`src/index.html`** - Demo page showing the widget in use
- **`src/styles.css`** - Optional file for custom style overrides

## Widget Behavior

1. **Chat Button**: Circular blue button with 💬 emoji, fixed in bottom-right
2. **Click to Open**: Button click slides out 800px wide chat panel from right
3. **Close Options**: 
   - Click the × button inside the panel
   - Click the chat button again
4. **Smooth Animations**: CSS transitions for professional feel

## Customization

The widget uses inline styles for maximum compatibility, but you can override them:

```css
/* Override button color */
.chatbot-button {
    background-color: #28a745 !important;
}

/* Customize panel width */
.chatbot-panel {
    width: 600px !important;
}
```

## Technical Details

- **No conflicts**: Wrapped in IIFE to avoid variable conflicts
- **High z-index**: Uses z-index 9998-9999 to stay on top
- **Modern CSS**: Uses flexbox and CSS transitions
- **Cross-browser**: Works in all modern browsers
- **Lightweight**: Less than 3KB minified

## Browser Support

- Chrome 50+
- Firefox 52+
- Safari 10+
- Edge 79+

## License

Open source - modify and distribute freely.