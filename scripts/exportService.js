/**
 * Export data to CSV format
 * @param {Array} data - Data to export
 * @param {string} filename - Filename for download
 */
export function exportToCsv(data, filename) {
    const csv = Papa.unparse(data);
    downloadFile(csv, `${filename}.csv`, 'text/csv');
}

/**
 * Export data to JSON format
 * @param {Array} data - Data to export
 * @param {string} filename - Filename for download
 */
export function exportToJson(data, filename) {
    const json = JSON.stringify(data, null, 2);
    downloadFile(json, `${filename}.json`, 'application/json');
}

/**
 * Download file helper function
 * @param {string} content - File content
 * @param {string} filename - Filename
 * @param {string} contentType - Content type
 */
function downloadFile(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}