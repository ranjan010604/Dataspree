// Utility functions

/**
 * Format date for display
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

/**
 * Get quality class based on score
 * @param {number} quality - Quality score
 * @returns {string} CSS class name
 */
export function getQualityClass(quality) {
    if (quality >= 90) return 'quality-high';
    if (quality >= 80) return 'quality-medium';
    return 'quality-low';
}

/**
 * Highlight search text in content
 * @param {string} text - Text to highlight
 * @param {string} search - Search term
 * @returns {string} HTML with highlighted text
 */
export function highlightSearchText(text, search) {
    if (!search) return text;
    
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}