# 📩 Marketing Leads Automation – Solution Architecture (Summary)

This project presents a lightweight, AI-assisted automation architecture designed to transform the manual, unstructured Marketing Leads process into a **standardized, automated, and traceable workflow**.

---

## 🎯 Purpose of the Solution

- Replace manual email-based lead handling with a structured digital process  
- Ensure complete and consistent customer information  
- Automatically classify leads using **urgency** and **priority** business rules  
- Trigger alerts for high-value or urgent leads  
- Provide real-time dashboards for visibility and decision-making  
- Establish a scalable foundation for future enhancements and CRM integration  

---

## 🏗️ High-Level Architecture (Markdown Diagram)

```text
 Customer Input
       │
       ▼
 ┌──────────────────────┐
 │     Google Forms     │
 │ (Lead Collection)    │
 └──────────────────────┘
       │
       ▼
 ┌──────────────────────┐
 │    Google Sheets     │
 │ (Data Repository)    │
 └──────────────────────┘
       │
       ▼
 ┌────────────────────────────────────────────┐
 │       Python Script + ChatGPT API          │
 │ (Sentiment Analysis + Business Rules:      │
 │    • Urgency Level                         │
 │    • Priority Product)                     │
 └────────────────────────────────────────────┘
       │
       ▼
 ┌──────────────────────┐
 │ Google Apps Script   │
 │ (Alerts & Automation │
 │    Orchestration)    │
 └──────────────────────┘
       │
       ▼
 ┌────────────────────────┐
 │ Google Looker Studio   │
 │ (KPIs & Dashboards)    │
 └────────────────────────┘
 ```
 
 ## 🧰 Technologies Used

| Component | Technology | Purpose |
|----------|------------|---------|
| Lead Intake | **Google Forms** | Standardized submission format |
| Data Storage | **Google Sheets** | Central dataset for all leads |
| Processing Engine | **Python** | ETL + sentiment scoring |
| AI Analysis | **ChatGPT API** | Determines urgency from comment text |
| Automation Layer | **Google Apps Script** | Alerts, triggers, workflow execution |
| Reporting | **Google Looker Studio** | Dashboards and KPI visualization |

---

## ✔ Expected Impact

- Faster and consistent follow-up  
- Clear identification of urgent and high-priority leads  
- Full data traceability and improved reporting  
- Reduction of manual workload for Marketing  
- Scalable architecture ready for future AI and channel integrations  

---
