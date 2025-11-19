# Public Utilities Cost Calculator (Colombia)

## Overview
A Microsoft Excel–based calculator developed to estimate public utilities costs in Colombia using reference values and tariff structures from EPM.  
The tool integrates an advanced graphical interface, multiple service modules, and VBA automation to produce approximate billing values for different utilities, including:

- Water and Sewerage  
- Energy  
- Gas  
- Street Lighting  
- Waste Collection  

The calculator was originally designed as part of a product development initiative and demonstrates the use of Excel as an interactive calculation and simulation platform.

## Year
2017 (initial version)

## Author
Amílcar Rodríguez

## Technologies
- Microsoft Excel (XLSM)
- VBA (Visual Basic for Applications)
- Excel formulas and dynamic tables
- Custom user interface built within Excel

## Purpose
The tool provides users with an interface to simulate and estimate monthly public service charges based on:

- User inputs (stratum, consumption, locality, billing period)
- Reference tariff tables sourced from public regulatory documents
- Service-specific formulas implemented in Excel and macros

This solution was created to simplify tariff interpretation and to offer an accessible estimation tool for internal product analysis and decision-making.

## Features
- **Multi-service structure** with separate modules for each utility  
- **Dynamic user interface** with buttons, selectors, and automated navigation  
- **Automated data loading** for tariff tables via VBA  
- **Protected/locked sections** to prevent accidental modification  
- **Scenario estimation** for different consumption levels and strata  
- **Consolidated totals** for all selected services  

## How It Works
1. The user selects the utility to calculate (Water, Energy, Gas, etc.).  
2. Inputs such as stratum, consumption, locality, and billing date are provided.  
3. Macros retrieve and update the relevant tariff tables.  
4. Excel formulas compute estimated charges and subtotals.  
5. Results are displayed in a formatted summary with service-level and overall totals.

### Example Inputs
- Stratum: 3  
- Water consumption: 5 m³  
- Energy consumption: 93 kWh  
- Billing period: January 2017  
- Locality: Sabaneta  

### Example Outputs
- Estimated water billing  
- Estimated sewerage billing  
- Estimated energy billing  
- Total combined cost  

(Values vary based on updated tariffs and consumption.)

## Notes
- This tool offers **approximate calculations** and is not intended to replace official billing systems.  
- Tariff structures may change; the calculator requires periodic updates to remain accurate.  
- Future improvements could include automated tariff retrieval, GeoJSON-based locality mapping, or standalone application conversion.  
