# DataSphere Documentation

## 📑 Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Guide](#installation-guide)
   - [Local Development](#local-development)
   - [Production Deployment](#production-deployment)
3. [Configuration](#configuration)
   - [Formspree Integration](#formspree-integration)
   - [Live Chat Integration (Tawk.to / Crisp)](#live-chat-integration-tawkto--crisp)
4. [Customization](#customization)
   - [Styling](#styling)
   - [Content](#content)
5. [File Structure](#file-structure)
6. [Browser Support](#browser-support)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

---

## 📌 Project Overview

**DataSphere** is a comprehensive **data catalog and management platform** designed to help organizations manage their data assets efficiently.  

It includes:  
- A modern, **responsive interface**  
- **AI-powered** data discovery, classification, and governance  
- **Live chat integration** for customer support  
- **Contact forms** powered by Formspree  

---

## ⚡ Installation Guide

### 🔹 Local Development
1. Download or clone the project files.  
2. Open `home.html` in a web browser.  
3. For full functionality, use a local server:  

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
🔹 Production Deployment
Upload all files to your web server.

Ensure proper file permissions:

bash
Copy
Edit
chmod 755 -R datasphere/
Configure Formspree and Tawk.to/Crisp integrations (see Configuration).

Test all functionality on the live server.

⚙️ Configuration
🔹 Formspree Integration
Formspree handles form submissions and email notifications.

Setup Steps:

Create a free account at Formspree.io.

Create a new form and copy the Form ID (e.g., xqkrgjnp).

Replace all instances of YOUR_FORMSPREE_ID with your actual form ID.

Example in contact.html:

html
Copy
Edit
<form action="https://formspree.io/f/xqkrgjnp" method="POST">
Example in assets/js/contact.js:

javascript
Copy
Edit
const formspreeUrl = 'https://formspree.io/f/xqkrgjnp';
Formspree Settings:

Enable email notifications

Configure auto-responders

Add spam protection filters

🔹 Live Chat Integration (Tawk.to / Crisp)
DataSphere supports free live chat integration via Tawk.to or Crisp.

Setup Steps (Tawk.to):

Create a free account at Tawk.to.

Create a new widget and copy the widget installation code.

Replace YOUR_WIDGET_ID in contact.html with your actual ID:

javascript
Copy
Edit
s1.src = 'https://embed.tawk.to/YOUR_WIDGET_ID/default';
Setup Steps (Crisp):

Create a free account at Crisp.

Copy your Crisp website ID.

Paste script before </body> in contact.html:

html
Copy
Edit
<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_CRISP_ID";
  (function(){
    var d=document,s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
Chat Configuration Options:

Customize widget appearance (colors, position, branding)

Set operating hours & offline messages

Configure canned responses

Enable email notifications for missed messages

🎨 Customization
🔹 Styling
Edit assets/css/main.css to change colors, spacing, and typography.

Example:

css
Copy
Edit
:root {
  --primary: #42a5f5;
  --primary-dark: #1e88e5;
  --secondary: #152642;
  --accent: #2ecc71;
  --text: #e0e0e0;
}
🔹 Content
Update company info in header and footer.

Modify contact details in contact.html.

Add new feature cards in home.html.

Create new pages (e.g., services.html) and update navigation menus.

📂 File Structure
bash
Copy
Edit
datasphere/
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles & variables
│   │   ├── header.css        # Header styles
│   │   ├── home.css          # Home page styles
│   │   ├── contact.css       # Contact page styles
│   │   └── responsive.css    # Responsive design
│   └── js/
│       ├── neuralNetwork.js  # Background animations
│       ├── navigation.js     # Navigation interactions
│       └── contact.js        # Contact form + chat
├── home.html                 # Landing page
├── contact.html              # Contact page (Form + Chat)
├── dashboard.html            # Data catalog dashboard (coming soon)
├── README.md                 # Project overview
└── documentation.md          # Detailed documentation (this file)
🌍 Browser Support
Browser	Version	Support
Chrome	60+	✅ Fully supported
Firefox	60+	✅ Fully supported
Safari	12+	✅ Fully supported
Edge	79+	✅ Fully supported
iOS Safari	12+	✅ Fully supported
Chrome Android	90+	✅ Fully supported

🛠️ Troubleshooting
Common Issues
Forms not submitting → Check Formspree ID, internet connection, and console logs.

Live chat not appearing → Verify widget ID, disable ad blockers, confirm Tawk.to/Crisp account active.

Styling issues → Clear cache, check CSS paths, re-upload assets.

Background animation not working → Ensure neuralNetwork.js is loaded, verify Canvas support.

Debugging Tips
Open browser Developer Tools (F12).

Check Console for JS errors.

Inspect Network tab for API calls.

Use Elements tab to verify CSS & HTML rendering.

❓ FAQ
Q: How do I change the color scheme?
A: Edit CSS variables in assets/css/main.css.

Q: Can I add more pages?
A: Yes, create new .html files and update navigation links.

Q: Is the platform mobile-friendly?
A: Yes, fully responsive.

Q: How do I set up email notifications?
A: Configure notifications in Formspree and Tawk.to/Crisp dashboards.

Q: How do I customize the chat widget?
A: Use the dashboard (Tawk.to/Crisp) to update colors, position, behavior.

Q: How do I translate the platform?
A: Update text in HTML files & lang attribute in <html> tag.

Q: How do I track form submissions?
A: Formspree dashboard provides submission analytics.

Q: What if I need help?
A: Contact support via live chat on contact.html or email: support@datasphere.com.