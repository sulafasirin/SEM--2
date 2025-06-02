# 🗃️ Lab Exercise Documentation

This repository contains my solutions for the **Advanced Database Management System** laboratory exercises, covering both **SQL** and **MongoDB** operations as part of my coursework.

---

## 📚 Exercise Structure

### 📝 Exercise 1: Database Schema Creation  
**File:** [Q1.SQL](./Q1.SQL)  
**Objectives:**
- Create a database named `employee`
- Design and implement three relational tables:
  - `Employee` (empno, ename, job, managerid, hiredate, salary, commission, deptno)
  - `Department` (deptno, deptname, location)
  - `SalaryGrade` (grade, lowsalary, highsalary)
- Verify table structures using DESCRIBE commands

---

### 📝 Exercise 2: Fundamental SQL Operations  
**File:** [Q2.SQL](./Q2.SQL)  
**Objectives:**
- Insert sample data into all tables (minimum 5 records each)
- Implement 20 essential SQL queries including:
  - Basic SELECT operations with various conditions
  - BETWEEN and IN operators
  - LIKE pattern matching
  - Date-based queries
  - Mathematical operations and column aliases
  - GROUP BY with aggregate functions (COUNT, MIN, MAX, AVG)
  - Sorting results with ORDER BY

---

### 📝 Exercise 3: Advanced SQL Joins  
**File:** [Q3.SQL](./Q3.SQL)  
**Objectives:**
- Perform 6 join operations between tables:
  - Display employee names with department names
  - Filter joined results based on salary conditions
  - Implement salary grade classification
  - Multi-table joins with complex filtering
  - Sorting joined results
- Demonstrate understanding of INNER JOIN syntax and applications

---

### 📝 Exercise 4: Subquery Techniques  
**File:** [Q4.SQL](./Q4.SQL)  
**Objectives:**
- Implement 5 subquery scenarios:
  - Comparative subqueries with ALL operator
  - Subqueries in WHERE clause
  - Finding departments without employees
  - Identifying top earners using LIMIT
  - Subqueries with aggregate functions

---

### 📝 Exercise 5: MongoDB Operations  
**File:** [Q5.JS](./Q5.JS)  
**Objectives:**
- Create an `Inventory` database
- Design a `Products` collection with complex documents containing:
  - Nested specifications documents
  - Arrays for color options and storage capacities
  - Various data types including dates
- Implement 19 MongoDB queries including:
  - Basic document retrieval
  - Field projection
  - Array queries (`$in`, `$nin`, `$elemMatch`)
  - Nested document queries
  - Comparison operators (`$lt`, `$gt`)
  - Logical operators (`$or`, `$and`)
  - Date-based queries

---

## ⚙️ Technical Implementation Notes

### SQL Exercises
- Developed for MySQL/MariaDB environments
- Includes proper constraints (PRIMARY KEY)
- Demonstrates data integrity through table relationships
- Uses appropriate data types for each field

### MongoDB Exercises
- Implemented for MongoDB shell (version 4.4+ compatible)
- Shows document-oriented database design principles
- Includes examples of complex query operations
- Demonstrates array manipulation techniques

---
