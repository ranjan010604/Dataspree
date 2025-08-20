import { filterDatasets } from './filterService.js';
import { exportToCsv, exportToJson } from './exportService.js';
import { formatDate, getQualityClass, debounce } from './utils.js';

// Current state
let currentPage = 1;
const pageSize = 5;
let filteredData = [];
let currentFilters = {
    search: '',
    category: '',
    date: '',
    size: ''
};

// DOM elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const dateFilter = document.getElementById('date-filter');
const sizeFilter = document.getElementById('size-filter');
const exportCsvBtn = document.getElementById('export-csv');
const exportJsonBtn = document.getElementById('export-json');
const dataTableBody = document.getElementById('data-table-body');
const categoryItems = document.querySelectorAll('.category-item');
const totalDatasets = document.getElementById('total-datasets');
const showingStart = document.getElementById('showing-start');
const showingEnd = document.getElementById('showing-end');
const totalCount = document.getElementById('total-count');
const pageButtons = document.querySelectorAll('.page-btn');

// Initialize
function init() {
    totalDatasets.textContent = "14";
    applyFilters();
    setupEventListeners();
    updatePerformanceMetrics();
}

// Apply filters and update UI
function applyFilters() {
    showLoading();
    
    setTimeout(() => {
        filteredData = filterDatasets(currentFilters);
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
        const qualityClass = getQualityClass(dataset.quality);
        const formattedDate = formatDate(dataset.updated);
        
        // Highlight search text
        let highlightedName = dataset.name;
        if (currentFilters.search) {
            const regex = new RegExp(`(${currentFilters.search})`, 'gi');
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

// Set up event listeners
function setupEventListeners() {
    // Search input with debounce
    const debouncedSearch = debounce((e) => {
        currentFilters.search = e.target.value.toLowerCase();
        applyFilters();
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);
    
    // Filter changes
    categoryFilter.addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        applyFilters();
    });
    
    dateFilter.addEventListener('change', (e) => {
        currentFilters.date = e.target.value;
        applyFilters();
    });
    
    sizeFilter.addEventListener('change', (e) => {
        currentFilters.size = e.target.value;
        applyFilters();
    });
    
    // Export buttons
    exportCsvBtn.addEventListener('click', () => exportToCsv(filteredData, 'datasets'));
    exportJsonBtn.addEventListener('click', () => exportToJson(filteredData, 'datasets'));
    
    // Category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const category = item.getAttribute('data-category');
            currentFilters.category = category;
            categoryFilter.value = category;
            applyFilters();
        });
    });
    
    // Pagination
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

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);