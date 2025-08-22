# DataSphere - Data Catalog & Management Platform

**DataSphere** is a modern, AI-powered data catalog and management platform that helps organizations unlock the full potential of their data assets.

---

## 🌟 Features

- **Unified Data Catalog**: Discover, inventory, and organize all data assets  
- **AI-Powered Classification**: Automated data tagging and categorization  
- **Data Lineage Visualization**: Track data movement across systems  
- **Enterprise Security**: Industry-leading security protocols  
- **Live Chat Support**: Integrated chatbot for 24/7 customer assistance  
- **Responsive Design**: Works seamlessly on all devices  

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)  
- Web server for local development (optional)  

### Installation
1. Clone or download the project files  
2. Upload to your web server or open `home.html` directly in a browser  
3. For form functionality and chat, set up **Formspree** and **Tawk.to** (or Crisp) accounts (see [Configuration](#️-configuration))  

---

## 📁 Project Structure

data-catalog-dashboard/
├── index.html # Main HTML file
├── styles/ # CSS stylesheets
│ ├── main.css # Global styles
│ ├── header.css # Header component styles
│ ├── filters.css # Filter controls styles
│ ├── sidebar.css # Sidebar styles
│ ├── table.css # Data table styles
│ └── responsive.css # Responsive design styles
├── scripts/ # JavaScript modules
│ ├── main.js # Main application logic
│ ├── dataService.js # Data management functions
│ ├── filterService.js # Filtering functionality
│ ├── exportService.js # Export functionality
│ └── utils.js # Utility functions
├── assets/ # Static assets
│ └── icons/ # Icon files
├── README.md # Project documentation
└── DOCUMENTATION.md # Technical documentation

pgsql
Copy
Edit

---

## ⚙️ Configuration

### Formspree Setup (Contact Forms)
1. Visit [Formspree.io](https://formspree.io)  
2. Create a free account  
3. Create a new form and note your **Form ID**  
4. Replace `YOUR_FORMSPREE_ID` in `contact.html` and `contact.js` with your actual ID  

### Live Chat Setup (Tawk.to or Crisp)
1. Visit [Tawk.to](https://www.tawk.to) or [Crisp](https://crisp.chat)  
2. Create a free account  
3. Create a new chat widget and copy the **script snippet**  
4. Paste the script before the closing `</body>` tag in `contact.html` (or globally in `index.html`)  

Example (Tawk.to):
```html
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/YOUR_WIDGET_ID/1gqxyz';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
</script>
Example (Crisp):

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
🎨 Customization
Colors
Modify the color scheme by editing CSS variables in main.css:

css
Copy
Edit
:root {
  --primary: #42a5f5;
  --secondary: #152642;
  --accent: #2ecc71;
}
Content
Update company information in HTML files

Modify feature descriptions and benefits

Add your own logo and branding elements

🌐 Pages
Home (home.html) – Main landing page with features and overview

Contact (contact.html) – Contact form + Live Chat Support

Dashboard (dashboard.html) – Data catalog interface (to be implemented)

📱 Responsive Design
The platform is fully responsive and works on:

Desktop computers (1200px+)

Tablets (768px – 1199px)

Mobile devices (< 768px)

🤝 Contributing
Fork the project

Create your feature branch:

bash
Copy
Edit
git checkout -b feature/AmazingFeature
Commit your changes:

bash
Copy
Edit
git commit -m "Add some AmazingFeature"
Push to the branch:

bash
Copy
Edit
git push origin feature/AmazingFeature
Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

🆘 Support
If you have any questions or need help:

Use the live chat on our Contact Page

Email us at support@datasphere.com

Check our documentation for detailed guides

🙏 Acknowledgments
Font Awesome for icons

Formspree for form handling

Tawk.to / Crisp for live chat functionality

All contributors who help improve DataSphere

yaml
Copy
Edit

---

## ✅ Update in GitHub

Run these commands to update your repo with the new chat-integrated README:

```bash
git add README.md
git commit -m "Updated README with chat integration details"
git push origin main