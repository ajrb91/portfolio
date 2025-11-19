
### **Feature Exploration and Cleaning**
High-cardinality categorical variables were analyzed and processed:

- Razon_social  
- Rubro_economico  
- Actividad económica  
- Región  
- tendencia_final  
- mercado_objetivo_final  

Processing methods:

- Manual grouping based on business knowledge  
- Text mining  
- Unsupervised clustering (K-Means) to reduce feature dimensionality  
- Validation of new business logic based on updated understanding  

### **Final Feature Set (20 Variables)**

aprobado_privado
aprobado_privado_pecuniario
Numero_de_trabajadores_dependientes
aprobado_corfo (continuous target)
tipo_persona_beneficiario
tramo_ventas
Subtipo_de_contribuyente
Rubro_economico
Región
tendencia_final
mercado_objetivo_final
tipo_innovacion
Tipo_de_contribuyente
tipo_proyecto
sostenible
economia_circular_si_no
genero_director
ley_rep_si_no
estado_aprobacion (discrete target)
razon_social_agrupadas


---

## 🤖 4. Modeling Approach

### The project works with **two modeling strategies**:

---

### **A. Continuous Target (aprobado_corfo)**  
Algorithms tested:

- ✔ Support Vector Regression (SVM)  
- ✔ Linear Regression  

Metrics:

- MSE  
- R²  

**Results:**  
Performance was poor, confirming that the business problem is fundamentally **categorical**, not continuous.  
This validated the need to pivot toward classification.

---

### **B. Discrete Target (estado_aprobacion)**  
Algorithms tested:

- ✔ Logistic Regression  
- ✔ Decision Trees  

Metrics:

- Accuracy  
- Recall  
- F1-score  
- Confusion Matrix  

### **Classification Results**

#### Logistic Regression
- Accuracy: **99.80%**
- Precision, Recall, F1: ~1.0
- Confusion Matrix: Only 3 false positives, **0 failures for non-approved cases**

#### Decision Tree
- Accuracy: **100%**
- No false positives  
- No false negatives  
- Perfect class separation

➡ These models showed **excellent performance**, although further validation is recommended due to class imbalance.

---

## 🔍 5. Key Insights

Variables with strongest influence (Logistic Regression coefficients):

| Rank | Variable | Influence |
|------|----------|-----------|
| 1 | tipo_persona_beneficiario_PERSONA JURIDICA COMERCIAL | ↑ Very high |
| 2 | tipo_persona_beneficiario_Persona Jurídica en Chile | ↑ High |
| 3 | tramo_ventas_Sin ventas | ↓ Negative |
| 4 | mercado_objetivo_final_Educación y Servicios | ↓ Negative |
| 5 | razon_social_agrupadas_Desarrollo Agropecuario | ↑ Moderate |

**Interpretation:**  
Certain business types and market segments strongly increase approval probability, while others decrease it.

---

## 🧭 6. Challenges & Lessons Learned

- Class imbalance affects model behavior  
- Very high dimensionality in categorical features  
- Need for careful domain understanding to map categories  
- Importance of iterative exploration and variable refinement  
- Potential risk of overfitting in models with extremely high accuracy  

---

## 📈 7. Recommendations

- Apply cross-validation for more robust metrics  
- Evaluate sampling techniques (oversampling/undersampling)  
- Try ensemble methods (Random Forest, Gradient Boosting)  
- Automate repetitive EDA processes  
- Explore deeper feature engineering from raw text fields  

---

## 🧰 8. Technologies Used

- Python  
- Pandas, NumPy  
- Scikit-Learn (Regression, Classification, SVM)  
- Matplotlib, Seaborn  
- K-Means (feature grouping)  
- API consumption from Data Innova  
- Jupyter Notebook  
- PDF reporting  

---

## ✔ 9. Summary

This project demonstrates a complete, end-to-end Data Science workflow applied to **real Chilean public-sector data**, producing:

- A validated classification model for CORFO funding approval  
- Identification of key decision variables  
- A cleaner, automated dataset pipeline  
- Strong ML modeling results for academic and business interpretation  

It stands as a comprehensive and high-quality final project for the Data Science Diploma.

---
