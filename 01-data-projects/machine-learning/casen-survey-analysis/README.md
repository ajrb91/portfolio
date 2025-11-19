# 📘 CASEN Survey Analysis – Machine Learning Project

This project applies Machine Learning techniques to the **CASEN** social survey dataset from Chile.  
The goal is to explore socioeconomic variables, clean and prepare the data, detect inconsistencies, and train predictive models to analyze income-related outcomes.

---

## 🎯 Objective

- Analyze key CASEN variables (education, activity, age, income).  
- Clean the dataset and handle missing values.  
- Detect and remove outliers (particularly in *edad*).  
- Train regression and regularization models to predict socioeconomic indicators.  

---

## 🔍 Workflow Summary

### **1. Data Selection**
From the full CASEN dataset, the following variables were used:

- `esc` — education (years)  
- `edad` — age  
- `activ` — employment activity  
- `rama` — economic sector  
- `ytrabajocor` — corrected labor income (target)

### **2. Data Cleaning**
- Inspection of missing values  
- Summary statistics  
- Boxplots for outlier detection  
- Outlier removal (one extreme age case)  
- Mean imputation for missing fields (e.g., education)

### **3. Exploratory Analysis**
- Distribution of age  
- Frequency analysis  
- Statistical summaries of numeric variables  

### **4. Modeling**
The notebook applies several predictive models:

- **Linear Regression (OLS)**  
- **Lasso Regression**  
- **ElasticNet Regression**

Each model was evaluated using:

- MSE  
- RMSE  
- MAE  
- R²  

Tables were generated comparing TRAIN and TEST performance.

---

## 🧰 Technologies Used

- Python  
- Pandas, NumPy  
- Matplotlib, Seaborn  
- Scikit-Learn (Lasso, ElasticNet)  
- StatsModels (OLS)  
- Jupyter Notebook  

---

## ✔ Result

The project demonstrates the complete ML workflow applied to real Chilean socioeconomic data:  
from cleaning CASEN variables, through outlier handling and model training, to generating metrics that evaluate predictive performance.

---

