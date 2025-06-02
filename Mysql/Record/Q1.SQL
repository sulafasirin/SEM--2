1. Create a database
CREATE DATABASE employee;
Query OK, 1 row affected (0.01 sec)

2. Create table Employee with the following fields – empno int primary key, ename varchar(30), job varchar(10), managerid int, hiredate date, salary int, commision int, deptno int
CREATE TABLE Employee (
    empno INT PRIMARY KEY,
    ename VARCHAR(30),
    job VARCHAR(10),
    managerid INT,
    hiredate DATE,
    salary INT,
    commision INT,
    deptno INT
);
Query OK, 0 rows affected (0.04 sec)

3. Describe schema
DESCRIBE Employee;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| empno     | int         | NO   | PRI | NULL    |       |
| ename     | varchar(30) | YES  |     | NULL    |       |
| job       | varchar(10) | YES  |     | NULL    |       |
| managerid | int         | YES  |     | NULL    |       |
| hiredate  | date        | YES  |     | NULL    |       |
| salary    | int         | YES  |     | NULL    |       |
| commision | int         | YES  |     | NULL    |       |
| deptno    | int         | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
8 rows in set (0.00 sec)

4. Create a table Department with the following fields – deptno int primary key, deptname varchar(15), location varchar(10)
CREATE TABLE Department (
    deptno INT PRIMARY KEY,
    deptname VARCHAR(15),
    location VARCHAR(10)
);
Query OK, 0 rows affected (0.02 sec)

5. Describe schema
DESCRIBE Department;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| deptno   | int         | NO   | PRI | NULL    |       |
| deptname | varchar(15) | YES  |     | NULL    |       |
| location | varchar(10) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

6. Create a table SalaryGrade with the following fields – grade int primary key, lowsalary int, highsalary int
CREATE TABLE SalaryGrade (
    grade INT PRIMARY KEY,
    lowsalary INT,
    highsalary INT
);
Query OK, 0 rows affected (0.02 sec)

7. Describe schema
DESCRIBE SalaryGrade;
+------------+------+------+-----+---------+-------+
| Field      | Type | Null | Key | Default | Extra |
+------------+------+------+-----+---------+-------+
| grade      | int  | NO   | PRI | NULL    |       |
| lowsalary  | int  | YES  |     | NULL    |       |
| highsalary | int  | YES  |     | NULL    |       |
+------------+------+------+-----+---------+-------+
3 rows in set (0.00 sec)
