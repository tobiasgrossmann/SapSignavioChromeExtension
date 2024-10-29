document.addEventListener('DOMContentLoaded', checkDataAvailability);
document.getElementById('fetch-json').addEventListener('click', downloadCSVIfExists);

// Check if CSV data is already available and update status
function checkDataAvailability() {
  chrome.storage.local.get("csvData", (data) => {
    const status = document.getElementById('status');
    const downloadButton = document.getElementById('fetch-json');

    if (data.csvData) {
      const recordCount = data.csvData.split('\n').length - 1; // Count records by line
      status.textContent = `Data available. Ready to download.`;
      downloadButton.disabled = false;
    } else {
      status.textContent = "No data found. Please open the SAP Signavio recommendations.";
      downloadButton.disabled = true;
    }
  });
}

// Download CSV if data is available
function downloadCSVIfExists() {
  chrome.storage.local.get("csvData", (data) => {
    if (data.csvData) {
      downloadCSV(data.csvData, 'recommendations.csv');
    } else {
      alert("No data available. Please open the SAP Signavio recommendations first.");
    }
  });
}

// Function to trigger CSV download
function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
