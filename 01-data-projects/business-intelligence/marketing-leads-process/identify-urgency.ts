function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var row = e.range.getRow();

  var processedFlag = sheet.getRange(row, 12).getValue();
  if (processedFlag === "Yes") return;

  var comment = sheet.getRange(row, 6).getValue(); // Comments of the Interest
  var product = sheet.getRange(row, 5).getValue(); // Product of Interest
  var email = sheet.getRange(row, 4).getValue();   // Email Address
  var customer = sheet.getRange(row, 2).getValue();   // Customer name
  var number = sheet.getRange(row, 3).getValue();   // Customer name

  var analysis = analyzeWithChatGPT(comment, product);

  // Save analysis
  sheet.getRange(row, 10).setValue(analysis.urgency);  // Urgency level (Column 11)
  sheet.getRange(row, 11).setValue(analysis.priority); // Priority product (Column 12)

  if (analysis.urgency === "High" && analysis.priority === "Yes") {
    MailApp.sendEmail({
      to: "test@mail.com",
      subject: "🚨 Lead with HIGH urgency and priority detected, please take a action",
      body: `New critical lead:\n\nProduct: ${product}\nCustomer name: ${customer}\nCustomer Number: ${number}\nComment: ${comment}\nEmail: ${email}`
    });
  }

  sheet.getRange(row, 12).setValue("Yes"); // Check as a Processed
}

function analyzeWithChatGPT(comment, product) {
  const apiKey = ""; // 

  const prompt = `
You will receive a comment from a banking customer and the name of a banking product. 
Your task is to analyze:

1. Urgency: 
   - Return "High" if the comment expresses frustration, urgency, confusion, dissatisfaction, or an immediate need.
   - Return "Medium" if the comment expresses general interest or intention to proceed.
   - Return "Low" if the comment is neutral or exploratory.

2. Priority:
   - Return "Yes" if the product is one of the following: Home Loan, Investment Plan.
   - Return "No" for all other products.

Respond only with a JSON object like:
{
  "urgency": "High",
  "priority": "Yes"
}

Comment: "${comment}"
Product: "${product}"
`;

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an assistant helping classify leads for a bank."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  };

  const options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch("https://api.openai.com/", options);
    const responseText = response.getContentText();
    Logger.log("🔵 API Raw Response: " + responseText);

    const json = JSON.parse(responseText);

    if (!json.choices || !json.choices[0]) {
      Logger.log("⚠️ Response missing choices. Check error:");
      Logger.log(responseText);
      return { urgency: "Medium", priority: "No" };
    }

    const reply = json.choices[0].message.content.trim();
    Logger.log("✅ GPT Reply: " + reply);

    return JSON.parse(reply);

  } catch (error) {
    Logger.log("❌ Exception occurred: " + error);
    return { urgency: "Medium", priority: "No" };
  }
}