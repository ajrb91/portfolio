# 🏡 House Price Prediction – Machine Learning Project

This project applies supervised Machine Learning techniques to predict the **sale price of residential properties** using the well-known **Ames Housing Dataset**.  
It was developed as part of a data science training process, simulating the creation of an internal pricing tool for a real estate company.

---

## 🎯 Objective

To build an initial predictive model capable of estimating the **sale price** of a property based on its physical, structural, and locational characteristics.  
This prototype is intended to support:

- client-facing pricing tools  
- internal appraisal processes  
- exploratory analysis of key housing features  

---

## 📂 Dataset

- Source: **Ames, Iowa Housing Dataset** (Kaggle)  
- Size: **79 variables**, **1460 rows**  
- Data types: numerical & categorical  
- Split into training (80%) and testing (20%)

---

## 🧹 Methodology Overview

The project follows a standard ML workflow:

### 1. **Data Collection**
- Kaggle dataset (Ames Housing)

### 2. **Exploratory Data Analysis (EDA)**
- Statistical summary of numerical and categorical variables  
- Distribution analysis  
- Correlation analysis for key predictors  
- Missing value detection  
- Outlier detection (visual + statistical)

### 3. **Data Cleaning**
- Imputation of missing values  
- Outlier treatment  
- Feature reduction through domain knowledge  

### 4. **Feature Engineering**
- One-hot encoding of all categorical variables  
- Scaling of all numerical features  
- Final selection of relevant predictors

### 5. **Model Training**
Algorithm used:
- **Lasso Regression**

Reason:
- Handles high-dimensional datasets efficiently  
- Performs coefficient shrinkage → eliminates irrelevant features  
- Reduces overfitting risk  

### 6. **Model Evaluation**
Metrics used:
- **R²**
- **MSE**
- **RMSE**

---

## 🔑 Key Features Identified

### **Most influential numerical variables**
- `YearRemodAdd`
- `TotalBsmtSF`
- `FullBath`
- `1stFlrSF`
- `TotRmsAbvGrd`
- `GrLivArea`
- `GarageCars`
- `OverallQual`
- `MasVnrArea`
- `GarageYrBlt`
- `YearBuilt`
- `GarageArea`

### **Most influential categorical variables**
- `MSZoning`, `Street`, `LotShape`, `LandContour`
- `LotConfig`, `LandSlope`, `Neighborhood`
- `Condition1`, `BldgType`, `HouseStyle`
- `Exterior1st`, `Exterior2nd`, `Foundation`
- `Heating`, `HeatingQC`, `CentralAir`
- `KitchenQual`, `Functional`
- `GarageType`, `GarageFinish`, `GarageQual`
- `SaleType`, `SaleCondition`
- *and others*

---

## 📈 Results

### **Model Performance**
| Source | MSE | R² | RMSE |
|--------|--------------|--------|----------------|
| Train (80%) | 1.26473e+08 | **0.957** | **11,246** |
| Test (20%) | 4.82926e+08 | **0.837** | **21,975** |

### Interpretation
- The model explains **~83%** of price variability on unseen data.  
- Test RMSE ≈ **$21,975**, a **5.8% error** relative to the price range of the dataset.  
- Residual plots show **uniform distribution**, indicating a well-fitted model.

---

## 🧭 Recommendations & Next Steps

- Perform more iterations of **feature engineering**  
- Test **ensemble models** (Random Forest, Gradient Boosting)  
- Explore **cross-validation** for improved robustness  
- Further reduce dimensionality where correlated variables overlap  
- Consider tuning hyperparameters for even better performance  

---

## 🧰 Technologies Used

- Python  
- Pandas, NumPy  
- Scikit-Learn (Lasso Regression)  
- Matplotlib, Seaborn  
- Jupyter Notebook  

---

## ✔ Summary

This project demonstrates a complete ML workflow for predicting real estate prices using structured tabular data.  
The model yields strong results for a first iteration and highlights key drivers behind property valuation, laying the groundwork for a future pricing tool for real estate platforms.

---
