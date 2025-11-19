# 🏗️ MOP Investment Analysis – Machine Learning Project

This project applies statistical analysis and Machine Learning techniques to datasets from the **Ministerio de Obras Públicas (MOP) – Chile**, with the objective of understanding and modeling investment patterns across regions, project types, and temporal trends.

It follows a full Data Science workflow using a Jupyter Notebook as the primary analytical environment.

---

## 🎯 Objective

To analyze MOP public investment data and build a predictive model capable of estimating or understanding:

- investment amounts  
- project characteristics associated with higher funding  
- regional and temporal behavioral patterns  
- key variables influencing cost, priority, or project allocation  

This analysis supports decision-making, transparency, and prioritization within public infrastructure management.

---

## 📂 Dataset

Typical variables analyzed include:

- **Project information:** project name, type of work, category  
- **Financial attributes:** investment amount, budget, execution cost  
- **Geographical fields:** region, province, commune  
- **Temporal fields:** year, execution period  
- **Operational metrics:** project status, progress indicators  

Data was loaded, cleaned, and structured to prepare for modeling and insights extraction.

---

## 🧹 Methodology

The notebook follows the classic stages of a machine learning workflow:

### **1. Data Understanding**
- Overview of dataset structure  
- Descriptive statistics  
- Identification of missing values and inconsistencies  
- Exploration of categorical and numerical variables  

### **2. Data Cleaning & Preparation**
- Handling of missing values  
- Treatment of outliers  
- Normalization and encoding of features  
- Feature selection and correlation analysis  

### **3. Exploratory Data Analysis (EDA)**
- Investment distribution by region and project type  
- Year-over-year investment behavior  
- Boxplots, histograms, and heatmaps  
- Identification of high-impact variables  

### **4. Modeling**
Depending on the target definition, the project may use:

- **Regression models (if predicting investment amount):**  
  - Linear Regression  
  - Regularized models (Lasso / Ridge)  
  - Tree-based models  

- **Classification models (if predicting project category):**  
  - Decision Trees  
  - Logistic Regression  
  - Random Forest  

### **5. Evaluation**
Common metrics used include:

- **Regression:** R², RMSE, MAE  
- **Classification:** Accuracy, Recall, F1-score, Confusion Matrix  

---

## 📊 Results (Conceptual Summary)

The results provided insights into:

- Regions with the highest concentration of public investment  
- Project types with the strongest influence on budget allocation  
- Variables most correlated with investment amount  
- Model performance for predicting cost or classifying projects  

Although model performance may vary by approach, the analysis establishes a solid baseline and identifies feature groups with the greatest predictive importance.

---

## 🔑 Key Insights

- Certain **regions and project categories** consistently receive higher public investment.  
- Infrastructure type and geographical location are strong predictors of funding.  
- Categorical fields require careful preprocessing due to high cardinality.  
- Tree-based models often outperform linear ones in this domain due to variable complexity.  

---

## 🧰 Technologies Used

- Python  
- Pandas, NumPy  
- Matplotlib, Seaborn  
- Scikit-Learn  
- Jupyter Notebook  

---

## ✔ Summary

This project demonstrates the application of machine learning to **real public-sector investment data**, exploring:

- budget patterns  
- predictive modeling  
- key drivers of infrastructure spending  

The work provides a foundation for deeper analysis and more advanced models for public investment forecasting.

---

