# Data Catalog Dashboard

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

This project is licensed under the MIT License.