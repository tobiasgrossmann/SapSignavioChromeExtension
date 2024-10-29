# Privacy Policy for JSON to CSV Converter for SAP Signavio Recommendations

## Overview

The **JSON to CSV Converter for SAP Signavio Recommendations** Chrome extension passively listens to network traffic, captures JSON data from specific SAP Signavio API calls, and converts it to a CSV file for easy download. This extension is intended for users who need a quick and convenient way to export recommendations data for offline use and analysis.

## Extension Functionality

When enabled, this Chrome extension monitors network requests to detect URLs containing the string `"CorrRecommendationsOverviewWithDataLatestPerKpiIns"`. When a matching request is found, the extension captures the JSON response, converts it to CSV format, and temporarily stores the data locally within Chrome's storage. Users can then download the CSV file via the extension popup.

## Data Privacy and Processing

1. **Collected Data**:  
   The extension only captures JSON data from API calls with URLs containing `"CorrRecommendationsOverviewWithDataLatestPerKpiIns"`. No other network requests are processed or stored. The JSON data is converted to CSV and stored locally for the sole purpose of enabling download.

2. **Storage and Data Access**:  
   All data is stored locally on the user’s device within Chrome’s storage, accessible only to the extension. This storage is temporary and used solely for the user to download the CSV file. Data is cleared either upon download, when the browser is closed, or if the user manually clears Chrome storage.

3. **No Data Sharing**:  
   This extension does not transmit, share, or upload any data to external servers or third-party services. The data remains entirely on the user’s local device.

4. **Data Deletion**:  
   Data temporarily stored by the extension is deleted once the user downloads the CSV file, closes the browser, or clears Chrome storage manually.

## Usage Notes and Consent

By using this extension, you consent to the data handling practices as outlined above. This tool is provided "as-is" to assist in exporting SAP Signavio recommendations, with a focus on user data privacy and security.

If you have further questions regarding data privacy, please contact the developer of this extension.

---

## How to Use the Extension

1. Install the extension in your Chrome browser.
2. Open the SAP Signavio recommendations page.
3. The extension will monitor network traffic and capture JSON data when a matching API request is detected.
4. Open the extension popup, check for data availability, and click “Download CSV” to export the data.

