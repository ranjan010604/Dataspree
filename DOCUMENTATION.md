# DataSphere Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Guide](#installation-guide)
3. [Configuration](#configuration)
   - [Formspree Integration](#formspree-integration)
   - [Tawk.to Integration](#tawktop-integration)
4. [Customization](#customization)
   - [Styling](#styling)
   - [Content](#content)
5. [File Structure](#file-structure)
6. [Browser Support](#browser-support)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

## Project Overview

DataSphere is a comprehensive data catalog and management platform designed to help organizations manage their data assets efficiently. The platform features a modern, responsive interface with AI-powered capabilities for data discovery, classification, and governance.

## Installation Guide

### Local Development
1. Download or clone the project files
2. Open `home.html` in a web browser
3. For full functionality, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
Production Deployment
Upload all files to your web server

Ensure proper file permissions:

chmod 755 -R datasphere/
Configure Formspree and Tawk.to integrations (see below)

Test all functionality on the live server

Configuration
Formspree Integration
Formspree handles form submissions and email notifications.

Setup Steps:
Create a Formspree account at https://formspree.io/

Create a new form in your dashboard

Note the form ID (e.g., xqkrgjnp)

Replace all instances of YOUR_FORMSPREE_ID with your actual form ID:

In contact.html:

<form action="https://formspree.io/f/xqkrgjnp" method="POST">
In assets/js/contact.js:

javascript
const formspreeUrl = 'https://formspree.io/f/xqkrgjnp';
Formspree Configuration:
Set up email notifications in Formspree dashboard

Configure auto-responders for form submissions

Add spam protection filters as needed

Tawk.to Integration
Tawk.to provides free live chat functionality.

Setup Steps:
Create a Tawk.to account at https://www.tawk.to/

Create a new widget in your dashboard

Note the widget ID from the installation code

Replace YOUR_TAWK_TO_WIDGET_ID in contact.html with your actual ID:



s1.src = 'https://embed.tawk.to/your_widget_id_here/default';
Tawk.to Configuration:
Customize the chat widget appearance

Set up operating hours and offline messages

Configure email notifications for new messages

Add canned responses for common questions

Customization
Styling
The platform uses CSS variables for easy customization. Edit assets/css/main.css:

:root {
  /* Color scheme */
  --primary: #42a5f5;       /* Primary blue */
  --primary-dark: #1e88e5;  /* Dark blue */
  --secondary: #152642;     /* Dark background */
  --accent: #2ecc71;        /* Green accent */
  --text: #e0e0e0;          /* Light text */
  --text-secondary: #b0bec5;/* Secondary text */
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
Content
Updating Company Information
Edit the following sections in HTML files:

Company name and logo in header

Contact information in footer

Address, phone, and email in contact page

Modifying Features
Update feature cards in home.html:


<div class="feature-card">
  <div class="feature-icon">
    <i class="fas fa-brain"></i>
  </div>
  <h3 class="feature-title">Your Feature Title</h3>
  <p class="feature-description">Your feature description.</p>
</div>
Adding New Pages
Create new HTML file (e.g., services.html)

Copy the header and footer structure from existing pages

Add your content

Update navigation in all pages to include the new link


File Structure

datasphere/
├── assets/
│   ├── css/
│   │   ├── main.css              # Global styles and variables
│   │   ├── header.css            # Header and navigation styles
│   │   ├── home.css              # Home page specific styles
│   │   ├── contact.css           # Contact page specific styles
│   │   └── responsive.css        # Responsive design styles
│   └── js/
│       ├── neuralNetwork.js      # Animated background functionality
│       ├── navigation.js         # Navigation interactions
│       └── contact.js            # Contact form validation and chat
├── home.html                     # Main landing page
├── contact.html                  # Contact page with form and chat
├── dashboard.html                # Data catalog dashboard (to be implemented)
├── README.md                     # Project overview
└── documentation.md              # Detailed documentation (this file)


Browser Support
Browser	Version	Support
Chrome	60+	✅ Fully supported
Firefox	60+	✅ Fully supported
Safari	12+	✅ Fully supported
Edge	79+	✅ Fully supported
iOS Safari	12+	✅ Fully supported
Chrome Android	90+	✅ Fully supported
Troubleshooting
Common Issues
Forms Not Submitting
Check that Formspree ID is correctly configured

Verify internet connection

Check browser console for errors

Live Chat Not Appearing
Confirm Tawk.to widget ID is correct

Check if ad blockers are interfering

Verify Tawk.to account is active

Styling Issues
Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

Check CSS file paths are correct

Verify all assets are uploaded to server

Neural Network Background Not Working
Check that neuralNetwork.js is loaded

Verify browser supports Canvas API



Debugging
Open browser developer tools (F12) to:

Check for JavaScript errors in Console tab

Verify network requests in Network tab

Inspect elements in Elements tab

FAQ
How do I change the color scheme?
Edit the CSS variables in assets/css/main.css under the :root selector.

Can I add more pages?
Yes, create new HTML files following the same structure as existing pages. Remember to update the navigation in all pages.

How do I add new features to the home page?
Add new feature cards to the features section in home.html following the existing pattern.

Is this platform mobile-friendly?
Yes, the platform is fully responsive and works on all device sizes.

How do I set up email notifications?
Configure email notifications in your Formspree and Tawk.to dashboards.

Can I use my own domain for forms?
Yes, Formspree supports custom domains on paid plans.

How do I translate the platform to another language?
Edit all text content in the HTML files and update the lang attribute in the <html> tag.

Is there a way to track form submissions?
Yes, Formspree provides analytics on form submissions in their dashboard.

How can I customize the chat widget appearance?
Use the Tawk.to dashboard to customize the chat widget's colors, position, and behavior.

What if I need help with implementation?
Contact our support team through the live chat on the contact page or email support@datasphere.com.

For additional questions or support, please refer to the contact information on our website.

text

## File Structure Summary

Your project should now have these files:
datasphere/
├── assets/
│ ├── css/
│ │ ├── main.css
│ │ ├── header.css
│ │ ├── home.css
│ │ ├── contact.css
│ │ └── responsive.css
│ └── js/
│ ├── neuralNetwork.js
│ ├── navigation.js
│ └── contact.js
├── home.html
├── contact.html
├── dashboard.html (to be implemented)
├── README.md
└── documentation.md

text

These documentation files provide comprehensive information about your DataSphere project, including setup instructions, configuration details, customization options, and troubleshooting guidance.
