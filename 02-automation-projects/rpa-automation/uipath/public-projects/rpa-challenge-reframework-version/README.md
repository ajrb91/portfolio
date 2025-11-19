# 🤖 rpa-challenge-reframework-version

This project is a complete implementation of the classic **RPA Challenge** using **UiPath** and the **Robotic Enterprise Framework (REFramework)**.  
The goal of this version is not only to solve the challenge, but to demonstrate a **best-practice, enterprise-grade automation architecture** leveraging UiPath’s standard framework.

---

## 🎯 Purpose

To showcase how the RPA Challenge can be implemented following real development standards:

- Transactional processing  
- Robust exception handling  
- Config-driven execution  
- Modular workflows  
- Logging and retry mechanisms  
- Separation of business logic and framework logic  

This project demonstrates proficiency with UiPath REFramework and its recommended project structure.

---

## 🏗️ Project Structure

The project uses the default REFramework layout, with business logic components added for RPA Challenge automation.

```
rpa-challenge-reframework-version/
│
├── Data/ # Input/Output data or config files
├── Documentation/ # Internal documentation
├── Exceptions_Screenshots/ # Screenshots for failed transactions
├── Framework/ # REFramework core components
│ ├── InitAllApplications.xaml
│ ├── InitAllSettings.xaml
│ ├── GetTransactionData.xaml
│ ├── Process.xaml
│ ├── SetTransactionStatus.xaml
│ ├── RetryCurrentTransaction.xaml
│ ├── CloseAllApplications.xaml
│ └── KillAllProcesses.xaml
│
├── Process/
│ └── CompleteForm.xaml # Business logic to process each row
│
├── Tests/ # Test workflows (if applicable)
├── Main.xaml # Entry point
└── project.json # UiPath project metadata
``` 
---

## 🔧 How the Automation Works (High-Level)

### **1. Init State**
- Loads config settings  
- Opens browser  
- Navigates to **rpaChallenge.com**  
- Downloads the Excel file  
- Prepares environment for processing  

### **2. Get Transaction Data**
- Reads each row of the Excel DataTable  
- Prepares it as the next “transaction item”  

### **3. Process Transaction**
Handled in: **Process/CompleteForm.xaml**

- Maps fields dynamically  
- Enters values into the web form  
- Submits each entry  
- Logs business results  

### **4. Exception Handling**
The REFramework manages:
- Business exceptions  
- Application exceptions  
- Retries  
- Screenshot capture  
- Logging and proper cleanup  

### **5. End Process**
- Closes browser  
- Cleans resources  
- Completes log entries  

---

## ⭐ Why This Project Matters

This is not a “simple automation” — it is a **production-style solution** that demonstrates:

- ✔ Understanding of UiPath REFramework  
- ✔ Proper separation of concerns  
- ✔ Clean architecture and maintainability  
- ✔ Professional error handling  
- ✔ Config-driven automation  
- ✔ Scalable project design  

Perfect for showcasing **enterprise-level RPA capabilities** in a portfolio or interview scenario.

---

## 🧰 Technologies Used

- UiPath Studio  
- UiPath REFramework  
- Orchestrator-compatible components  
- Browser automation  
- Excel and DataTable operations  

---

## ✔ Summary

**rpa-challenge-reframework-version** delivers the RPA Challenge using UiPath’s industry-standard REFramework, demonstrating professional automation architecture, best practices, and clean modular design.

This project highlights real-world RPA development skills suitable for enterprise environments.

---
