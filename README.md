# 🚀 Launch Iframe - Chatbot Widget

A simple, embeddable chatbot widget that adds a floating chat button to any website with an 800px slide-out iframe panel.

## ⚡ Quick Start

Add this single line to any HTML page:

```html
<script src="https://raphaelfeliz.github.io/launch-iframe/widget-production.js" async></script>
```

That's it! The widget will automatically appear with a floating chat button in the bottom-right corner.

## 🎯 Features

- ✅ **One-line integration** - Just add a script tag
- ✅ **Self-contained** - No dependencies, no CSS files needed
- ✅ **Double-load protection** - Safe to include multiple times
- ✅ **Custom iframe URLs** - Configurable via `data-bot` attribute
- ✅ **Smooth animations** - Professional slide-in/out transitions
- ✅ **Accessibility** - Proper ARIA labels and keyboard support
- ✅ **Mobile friendly** - Works on all screen sizes
- ✅ **High z-index** - Stays above all page content

## 🔧 Custom Configuration

To use a different bot/iframe URL:

```html
<script 
  src="https://raphaelfeliz.github.io/launch-iframe/widget.js" 
  async 
  data-bot="https://your-custom-chatbot-url.com/">
</script>
```

## 📱 What It Does

1. **Creates a floating chat button** (💬) in the bottom-right corner
2. **Opens an 800px wide panel** when clicked, sliding in from the right
3. **Loads your chatbot/iframe** at full height within the panel
4. **Provides a close button** (×) overlaid on the iframe
5. **Handles all interactions** - click to open/close, hover effects

## 🌐 Default Configuration

- **Default iframe URL**: `https://hybrid-product-advisor-widget-v3-632357271427.us-west1.run.app/`
- **Panel width**: 800px
- **Panel height**: Full viewport height (100vh)
- **Button position**: Fixed bottom-right (20px from edges)
- **Z-index**: 9998-9999 (stays on top)

## 🧪 Testing

- **Live demo**: Open `test.html` in any browser
- **Local testing**: Serve files via any HTTP server
- **Integration test**: Check `chatbot-widget/` folder for various test scenarios

## 📁 Project Structure

```
/
├── widget.js              # Main widget (GitHub Pages serves this)
├── test.html             # Test page for GitHub Pages version
├── chatbot-widget/       # Development folder
│   ├── src/
│   │   ├── widget.js     # Development version
│   │   └── index.html    # Demo page
│   ├── simple-test.html  # Minimal test
│   └── test-iframe.html  # Hostile environment test
└── README.md
```

## 🔗 URLs

- **Production widget**: `https://raphaelfeliz.github.io/launch-iframe/widget-production.js`
- **GitHub repository**: `https://github.com/raphaelfeliz/launch-iframe`
- **Raw file**: `https://raw.githubusercontent.com/raphaelfeliz/launch-iframe/main/widget.js`

## 🚀 Deployment

This widget is automatically deployed via **GitHub Pages**:

1. Code is committed to the `main` branch
2. GitHub Pages serves `widget.js` from the repository root
3. The widget is immediately available at the GitHub Pages URL
4. No build process or additional setup required

## 💡 Technical Details

- **No external dependencies** - Pure vanilla JavaScript
- **IIFE wrapped** - Won't pollute global namespace
- **DOM ready handling** - Works regardless of when script loads
- **Error handling** - Graceful degradation if DOM isn't ready
- **Memory efficient** - Minimal DOM manipulation
- **Cross-browser compatible** - Works in all modern browsers

## ⚠️ Important Notes

- The iframe URL must allow embedding (no `X-Frame-Options: DENY`)
- Widget uses high z-index values (9998-9999) to stay on top
- All styles are inline to avoid conflicts with host page CSS
- Script includes double-load protection via global flag

## 📄 License

Open source - modify and distribute freely.

---

**Need help?** Check the test files in the `chatbot-widget/` folder for examples of different integration scenarios.