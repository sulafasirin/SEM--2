# 📘 MySQL Basic Syntax Cheat Sheet

---

## 🔹 1. Database Commands
```sql
CREATE DATABASE database_name;
USE database_name;
SHOW DATABASES;
DROP DATABASE database_name;
```

## 🔹 2. Table Commands
```sql
CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  ...
);
SHOW TABLES;
DESCRIBE table_name;
DROP TABLE table_name;
```

## 🔹 3. Data Types (Common)
```sql
-- Numbers
INT, FLOAT, DOUBLE

-- Strings
CHAR(n), VARCHAR(n), TEXT

-- Date/Time
DATE, DATETIME, TIMESTAMP

-- Boolean
BOOLEAN (TINYINT(1))
```

## 🔹 4. Insert, Update, Delete
```sql
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
UPDATE table_name SET column1 = value1 WHERE condition;
DELETE FROM table_name WHERE condition;
```

## 🔹 5. Select Queries
```sql
SELECT * FROM table_name;
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name WHERE condition;
```

## 🔹 6. Filtering Conditions
```sql
SELECT * FROM table WHERE age > 18 AND city = 'Delhi';
SELECT * FROM table WHERE name LIKE 'A%';
SELECT * FROM table WHERE age BETWEEN 18 AND 25;
SELECT * FROM table WHERE city IN ('Delhi', 'Mumbai');
```

## 🔹 7. Sorting and Limiting
```sql
SELECT * FROM table ORDER BY column ASC;
SELECT * FROM table ORDER BY column DESC;
SELECT * FROM table LIMIT 5;
SELECT * FROM table LIMIT 5 OFFSET 10;
```

## 🔹 8. Constraints (On Table Creation)
```sql
id INT PRIMARY KEY,
email VARCHAR(100) UNIQUE,
name VARCHAR(50) NOT NULL,
age INT DEFAULT 18,
FOREIGN KEY (dept_id) REFERENCES departments(id),
CHECK (age >= 18)
```

## 🔹 9. Alter Table
```sql
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE table_name MODIFY column_name new_datatype;
ALTER TABLE table_name DROP COLUMN column_name;
```

## 🔹 10. Aliases
```sql
SELECT salary AS monthly_salary FROM employees;
SELECT e.name FROM employees AS e;
```

## 🔹 11. Aggregate Functions
```sql
SELECT COUNT(*) FROM students;
SELECT SUM(marks), AVG(marks) FROM students;
SELECT MAX(marks), MIN(marks) FROM students;
```

## 🔹 12. GROUP BY and HAVING
```sql
SELECT city, COUNT(*) FROM users GROUP BY city;
SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 5;
```

## 🔹 13. DISTINCT
```sql
SELECT DISTINCT city FROM users;
```

## 🔹 14. NULL Handling
```sql
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;
```

## 🔹 15. Simple Join (INNER JOIN)
```sql
SELECT orders.id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

## 🔹 16. String Functions
```sql
SELECT LENGTH(name), UPPER(name), LOWER(name) FROM users;
SELECT CONCAT(first_name, ' ', last_name) FROM users;
```

## 🔹 17. Date Functions
```sql
SELECT NOW(), CURDATE(), CURTIME();
SELECT YEAR(birthdate), MONTH(birthdate), DAY(birthdate) FROM users;
```

## 🔹 18. Rename Table and Column
```sql
RENAME TABLE old_name TO new_name;
ALTER TABLE table_name CHANGE old_column new_column datatype;
```

## 🔹 19. SHOW Commands
```sql
SHOW TABLES;
SHOW DATABASES;
DESCRIBE table_name;
```

## 🔹 20. Constraint Manipulation

### Add Constraints After Table Creation
```sql
ALTER TABLE students ADD PRIMARY KEY (id);
ALTER TABLE students ADD UNIQUE (email);
ALTER TABLE students MODIFY name VARCHAR(100) NOT NULL;
ALTER TABLE students ALTER age SET DEFAULT 18;
ALTER TABLE students ADD CONSTRAINT chk_age CHECK (age >= 18);
ALTER TABLE students ADD CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES classes(id);
```

### Drop Constraints
```sql
ALTER TABLE students DROP PRIMARY KEY;
ALTER TABLE students DROP INDEX email;
ALTER TABLE students MODIFY name VARCHAR(100);
ALTER TABLE students ALTER age DROP DEFAULT;
ALTER TABLE students DROP CHECK chk_age;
ALTER TABLE students DROP FOREIGN KEY fk_class;
```

---

🧠 *Keep practicing these commands in a MySQL terminal or a GUI like phpMyAdmin, MySQL Workbench, or db-fiddle.*
