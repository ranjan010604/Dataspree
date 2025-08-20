import { datasets } from './DataService';

/**
 * Filter datasets based on criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered datasets
 */
export function filterDatasets(filters) {
    return datasets.filter(dataset => {
        // Search text filter
        const matchesSearch = filters.search === '' || 
            dataset.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            dataset.category.toLowerCase().includes(filters.search.toLowerCase());
        
        // Category filter
        const matchesCategory = filters.category === '' || dataset.category === filters.category;
        
        // Date filter
        let matchesDate = true;
        if (filters.date !== '') {
            const datasetDate = new Date(dataset.updated);
            const today = new Date();
            
            if (filters.date === 'week') {
                const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                matchesDate = datasetDate >= oneWeekAgo;
            } else if (filters.date === 'month') {
                const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
                matchesDate = datasetDate >= oneMonthAgo;
            } else if (filters.date === 'quarter') {
                const oneQuarterAgo = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
                matchesDate = datasetDate >= oneQuarterAgo;
            }
        }
        
        // Size filter
        let matchesSize = true;
        if (filters.size === 'small') {
            matchesSize = dataset.size < 1;
        } else if (filters.size === 'medium') {
            matchesSize = dataset.size >= 1 && dataset.size <= 10;
        } else if (filters.size === 'large') {
            matchesSize = dataset.size > 10;
        }
        
        return matchesSearch && matchesCategory && matchesDate && matchesSize;
    });
}

/**
 * Get unique categories from datasets
 * @returns {Array} Unique categories
 */
export function getUniqueCategories() {
    const categories = new Set(datasets.map(dataset => dataset.category));
    return Array.from(categories);
}

/**
 * Get category counts
 * @returns {Object} Category counts
 */
export function getCategoryCounts() {
    const counts = {};
    datasets.forEach(dataset => {
        counts[dataset.category] = (counts[dataset.category] || 0) + 1;
    });
    return counts;
}