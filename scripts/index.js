// DOM elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const dateFilter = document.getElementById('date-filter');
const sizeFilter = document.getElementById('size-filter');
const exportCsv = document.getElementById('export-csv');
const exportJson = document.getElementById('export-json');
const dataTableBody = document.getElementById('data-table-body');
const categoryItems = document.querySelectorAll('.category-item');
const totalDatasets = document.getElementById('total-datasets');
const showingStart = document.getElementById('showing-start');
const showingEnd = document.getElementById('showing-end');
const totalCount = document.getElementById('total-count');
const pageButtons = document.querySelectorAll('.page-btn');

// Current state
let currentPage = 1;
const pageSize = 5;
let filteredData = [...datasets];

// Initialize
function init() {
    totalDatasets.textContent = datasets.length;
    totalCount.textContent = datasets.length;
    renderDatasets();
    setupEventListeners();
    updatePerformanceMetrics();
}

// Filter datasets based on criteria
function filterDatasets() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const dateRange = dateFilter.value;
    const sizeRange = sizeFilter.value;
    
    showLoading();
    
    // Use setTimeout to simulate async operation and show loading state
    setTimeout(() => {
        filteredData = datasets.filter(dataset => {
            // Search text filter
            const matchesSearch = dataset.name.toLowerCase().includes(searchText) ||
                                dataset.category.toLowerCase().includes(searchText);
            
            // Category filter
            const matchesCategory = category === "" || dataset.category === category;
            
            // Date filter (simplified for demo)
            let matchesDate = true;
            if (dateRange !== "") {
                const datasetDate = new Date(dataset.updated);
                const today = new Date();
                
                if (dateRange === "week") {
                    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                    matchesDate = datasetDate >= oneWeekAgo;
                } else if (dateRange === "month") {
                    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
                    matchesDate = datasetDate >= oneMonthAgo;
                } else if (dateRange === "quarter") {
                    const oneQuarterAgo = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
                    matchesDate = datasetDate >= oneQuarterAgo;
                }
            }
            
            // Size filter
            let matchesSize = true;
            if (sizeRange === "small") {
                matchesSize = dataset.size < 1;
            } else if (sizeRange === "medium") {
                matchesSize = dataset.size >= 1 && dataset.size <= 10;
            } else if (sizeRange === "large") {
                matchesSize = dataset.size > 10;
            }
            
            return matchesSearch && matchesCategory && matchesDate && matchesSize;
        });
        
        currentPage = 1; // Reset to first page when filters change
        renderDatasets();
    }, 500);
}

// Show loading state
function showLoading() {
    dataTableBody.innerHTML = `
        <tr>
            <td colspan="6">
                <div class="loading">
                    <div class="spinner"></div>
                    <div>Loading data...</div>
                </div>
            </td>
        </tr>
    `;
}

// Render datasets to the table
function renderDatasets() {
    if (filteredData.length === 0) {
        dataTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    No datasets found matching your criteria.
                </td>
            </tr>
        `;
        updatePaginationInfo();
        return;
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const pageData = filteredData.slice(startIndex, endIndex);
    
    let html = '';
    pageData.forEach(dataset => {
        let qualityClass = 'quality-high';
        if (dataset.quality < 90) qualityClass = 'quality-medium';
        if (dataset.quality < 80) qualityClass = 'quality-low';
        
        // Format date for display
        const updatedDate = new Date(dataset.updated);
        const formattedDate = updatedDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        // Highlight search text
        const searchText = searchInput.value.toLowerCase();
        let highlightedName = dataset.name;
        if (searchText) {
            const regex = new RegExp(`(${searchText})`, 'gi');
            highlightedName = dataset.name.replace(regex, '<span class="highlight">$1</span>');
        }
        
        html += `
            <tr>
                <td>${highlightedName}</td>
                <td>${dataset.category}</td>
                <td>${formattedDate}</td>
                <td>${dataset.size} MB</td>
                <td>${dataset.records.toLocaleString()}</td>
                <td><span class="${qualityClass}">${dataset.quality}%</span></td>
            </tr>
        `;
    });
    
    dataTableBody.innerHTML = html;
    updatePaginationInfo();
    updateActivePageButton();
}

// Update pagination information
function updatePaginationInfo() {
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, filteredData.length);
    
    showingStart.textContent = startIndex;
    showingEnd.textContent = endIndex;
    totalCount.textContent = filteredData.length;
}

// Update active page button
function updateActivePageButton() {
    pageButtons.forEach((btn, index) => {
        if (index === 3) return; // Skip the next button
        
        if (index + 1 === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Export to CSV
function exportToCsv() {
    const csv = Papa.unparse(filteredData);
    downloadFile(csv, 'datasets.csv', 'text/csv');
}

// Export to JSON
function exportToJson() {
    const json = JSON.stringify(filteredData, null, 2);
    downloadFile(json, 'datasets.json', 'application/json');
}

// Helper function to download files
function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}

// Set up event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterDatasets);
    categoryFilter.addEventListener('change', filterDatasets);
    dateFilter.addEventListener('change', filterDatasets);
    sizeFilter.addEventListener('change', filterDatasets);
    exportCsv.addEventListener('click', exportToCsv);
    exportJson.addEventListener('click', exportToJson);

    // Set up category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const category = item.getAttribute('data-category');
            categoryFilter.value = category;
            filterDatasets();
        });
    });

    // Set up pagination
    pageButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (index === 3) {
                // Next button
                const totalPages = Math.ceil(filteredData.length / pageSize);
                if (currentPage < totalPages) {
                    currentPage++;
                    renderDatasets();
                }
            } else {
                // Page number button
                currentPage = index + 1;
                renderDatasets();
            }
        });
    });
}

// Simulate performance metrics
function updatePerformanceMetrics() {
    const loadTime = document.getElementById('load-time');
    
    // Simulate varying load times
    setInterval(() => {
        const time = (0.7 + Math.random() * 0.5).toFixed(1);
        loadTime.textContent = `${time}s`;
    }, 3000);
}

// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Always set Home as active initially
    const homeLink = document.querySelector('.nav-link[href="index.html"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default for dashboard link (stays on current page)
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // If not dashboard link, navigate to the page
            if (link.getAttribute('href') !== '#') {
                window.location.href = link.getAttribute('href');
            }
        });
    });
});

// Initialize the application
init();