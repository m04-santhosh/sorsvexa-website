function doPost(e) {
  try {
    // Open the active spreadsheet and select the first sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Extract parameters sent via application/x-www-form-urlencoded
    var fullName = e.parameter.fullName || "";
    var company = e.parameter.company || "";
    var email = e.parameter.email || "";
    var phone = e.parameter.phone || "";
    var industry = e.parameter.industry || "";
    var service = e.parameter.service || "";
    var budget = e.parameter.budget || "";
    var message = e.parameter.message || "";
    
    // Create a timestamp
    var timestamp = new Date();
    
    // Default status for a new lead
    var status = "New";
    
    // Append the row to the Google Sheet
    // Order: Timestamp, Full Name, Company, Email, Phone, Industry, Service, Budget, Message, Status
    sheet.appendRow([
      timestamp, 
      fullName, 
      company, 
      email, 
      phone, 
      industry, 
      service, 
      budget, 
      message, 
      status
    ]);
    
    // Return a success JSON response
    var response = {
      success: true,
      message: "Consultation saved successfully"
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (error) {
    // Return an error JSON response
    var response = {
      success: false,
      message: error.toString()
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
