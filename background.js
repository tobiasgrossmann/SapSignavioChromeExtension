chrome.webRequest.onCompleted.addListener(
  async (details) => {
    if (details.url.includes("CorrRecommendationsOverviewWithDataLatestPerKpiIns")) {
      try {
        let response = await fetch(details.url);
        let jsonData = await response.json();

        // Convert JSON to CSV only if 'value' key exists
        if (jsonData && jsonData.value) {
          let csvData = jsonToCSV(jsonData.value);

          // Store CSV data in Chrome storage for access in popup
          chrome.storage.local.set({ csvData });
        }
      } catch (error) {
        console.error('Error processing JSON response:', error);
      }
    }
  },
  { urls: ["<all_urls>"] }
);

function jsonToCSV(jsonArray) {
  let keys =[
    "ID", 
    "findingText", 
    "shortText", 
    "longText", 
    "rootCause_id", 
    "valueDriver_id", 
    "improvementOpportunity_id", 
    "impact_id", 
    "effort_id", 
    "viewName", 
    "toKpi_id", 
    "isAggregated", 
    "documentPath", 
    "documentSubPath", 
    "rootCauseText", 
    "valueDriverText", 
    "impactText", 
    "effortText", 
    "kpiId", 
    "kpiInsId", 
    "dcTimestamp", 
    "findingId", 
    "objectCount", 
    "aggregationCount", 
    "count", 
    "isBookmarked", 
    "blockerCount"
  ];


  //let keys = Object.keys(jsonArray[0]);
  let csvRows = [keys.join(',')];

  jsonArray.filter(obj => obj.objectCount !== 0).forEach((obj) => {
    let values = keys.map((key) => {
      let val = obj[key];
      if (val === null || typeof val === 'object') {
        // create a string out of the nested json object rem
        return "";
      }
      // make sure that val doesn't contain any commas or anything that would mess up the csv
      val = val.toString().replace(/,/g, '');
      return `"${val.toString().replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(','));
  });

  return csvRows.join('\n');
}



