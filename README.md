<!-- # Data Catalog Dashboard

A professional, responsive data catalog dashboard built with vanilla JavaScript that allows users to browse, search, and filter through datasets with export functionality.

## Features

- **Advanced Filtering**: Search and filter datasets by name, category, date, and size
- **Export Options**: Download filtered data as CSV or JSON
- **Performance Metrics**: Real-time performance monitoring
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Pagination**: Efficiently handle large datasets with pagination

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for testing) - you can use Live Server extension in VSCode

### Installation

1. Clone or download the project files
2. Place all files in a web-accessible directory
3. Open `index.html` in a web browser or use a local server

## Project Structure

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

## Usage

1. **Search**: Type in the search box to filter datasets by name or category
2. **Filter**: Use the dropdown filters to narrow down by category, date, or size
3. **Category Navigation**: Click on categories in the sidebar to filter quickly
4. **Pagination**: Navigate through pages of results using the page buttons
5. **Export**: Download the filtered data as CSV or JSON using the export buttons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- Font Awesome (via CDN) - for icons
- PapaParse (via CDN) - for CSV export functionality

## License

This project is licensed under the MIT License. -->


# DataSphere - Data Catalog & Management Platform

![DataSphere](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

DataSphere is a modern, AI-powered data catalog and management platform that helps organizations unlock the full potential of their data assets.

## 🌟 Features

- **Unified Data Catalog**: Discover, inventory, and organize all data assets
- **AI-Powered Classification**: Automated data tagging and categorization
- **Data Lineage Visualization**: Track data movement across systems
- **Enterprise Security**: Industry-leading security protocols
- **Live Chat Support**: 24/7 customer support integration
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development (optional)

### Installation
1. Clone or download the project files
2. Upload to your web server or open `home.html` directly in a browser
3. For form functionality, set up Formspree and Tawk.to accounts (see Configuration)

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

## ⚙️ Configuration

### Formspree Setup (Contact Forms)
1. Visit [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form and note your Form ID
4. Replace `YOUR_FORMSPREE_ID` in contact.html and contact.js with your actual ID

### Tawk.to Setup (Live Chat)
1. Visit [Tawk.to](https://www.tawk.to/)
2. Create a free account
3. Create a new widget and note your Widget ID
4. Replace `YOUR_TAWK_TO_WIDGET_ID` in contact.html with your actual ID

## 🎨 Customization

### Colors
Modify the color scheme by editing CSS variables in `main.css`:
```css
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
Home (home.html) - Main landing page with features and overview

Contact (contact.html) - Contact form with live chat support

Dashboard (dashboard.html) - Data catalog interface (to be implemented)


📱 Responsive Design
The platform is fully responsive and works on:

Desktop computers (1200px+)

Tablets (768px - 1199px)

Mobile devices (< 768px)


🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support


If you have any questions or need help:

Use the live chat on our contact page

Email us at support@datasphere.com

Check our documentation for detailed guides


🙏 Acknowledgments
Font Awesome for icons

Formspree for form handling

Tawk.to for live chat functionality

All contributors who help improve DataSphere