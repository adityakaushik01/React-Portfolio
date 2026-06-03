const SHEET_NAME = "Contact Form Submissions";

function doPost(e) {
  const sheet = getContactSheet();
  const data = e.parameter || {};

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.message || "",
    data.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("Contact form endpoint is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function getContactSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("No spreadsheet found. Bind this script to a Google Sheet.");
  }

  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(["Submitted At", "Name", "Email", "Message", "Source"]);
  }

  return sheet;
}
