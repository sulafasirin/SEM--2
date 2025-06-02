 1. Insert at least 5 values to each table (must include the following values)
 a. job-clerk,salesman,manager etc
 b. department name-accounting,research,sales etc
 c. employee name – allen,smith,ward etc.
 d. dept number -10,20
 e. Location-US

INSERT INTO Department VALUES
(10, 'Accounting', 'US'),
(20, 'Research', 'US'),
(30, 'Sales', 'US'),
(40, 'Marketing', 'US'),
(50, 'IT', 'US');

INSERT INTO Employee VALUES
(1001, 'Allen', 'Salesman', 1005, '1981-06-01', 1600, 300, 30),
(1002, 'Smith', 'Clerk', 1006, '1987-12-09', 800, NULL, 20),
(1003, 'Ward', 'Salesman', 1005, '1981-02-22', 1250, 500, 30),
(1004, 'Jones', 'Manager', 1007, '1981-04-02', 2975, NULL, 20),
(1005, 'Martin', 'Salesman', 1006, '1981-09-28', 1250, 1400, 30);

INSERT INTO SalaryGrade VALUES
(1, 700, 1200),
(2, 1201, 1400),
(3, 1401, 2000),
(4, 2001, 3000),
(5, 3001, 9999);

 2. Select all information from table employee
SELECT * FROM Employee;

 Output:
 +-------+--------+----------+----------+------------+--------+------------+--------+
 | empno | ename  | JOB      | managerid| hiredate   | salary | commission | deptno |
 +-------+--------+----------+----------+------------+--------+------------+--------+
 |  1001 | Allen  | Salesman |     1005 | 1981-06-01 |   1600 |        300 |     30 |
 |  1002 | Smith  | Clerk    |     1006 | 1987-12-09 |    800 |       NULL |     20 |
 |  1003 | Ward   | Salesman |     1005 | 1981-02-22 |   1250 |        500 |     30 |
 |  1004 | Jones  | Manager  |     1007 | 1981-04-02 |   2975 |       NULL |     20 |
 |  1005 | Martin | Salesman |     1006 | 1981-09-28 |   1250 |       1400 |     30 |
 +-------+--------+----------+----------+------------+--------+------------+--------+

 3. Select all information from table department
SELECT * FROM Department;

 Output:
 +--------+------------+----------+
 | deptno | deptname   | location |
 +--------+------------+----------+
 |     10 | Accounting | US       |
 |     20 | Research   | US       |
 |     30 | Sales      | US       |
 |     40 | Marketing  | US       |
 |     50 | IT         | US       |
 +--------+------------+----------+

 4. Select all information from table salarygrade
SELECT * FROM SalaryGrade;

 Output:
 +-------+-----------+------------+
 | grade | lowsalary | highsalary |
 +-------+-----------+------------+
 |     1 |       700 |       1200 |
 |     2 |      1201 |       1400 |
 |     3 |      1401 |       2000 |
 |     4 |      2001 |       3000 |
 |     5 |      3001 |       9999 |
 +-------+-----------+------------+

 5. Select empno,ename from table employee
SELECT empno, ename FROM Employee;

 Output:
 +-------+--------+
 | empno | ename  |
 +-------+--------+
 |  1001 | Allen  |
 |  1002 | Smith  |
 |  1003 | Ward   |
 |  1004 | Jones  |
 |  1005 | Martin |
 +-------+--------+

 6. List all employees having a salary range between 1000 and 2000
SELECT * FROM Employee WHERE salary BETWEEN 1000 AND 2000;

 Output:
 +-------+--------+----------+----------+------------+--------+------------+--------+
 | empno | ename  | JOB      | managerid| hiredate   | salary | commission | deptno |
 +-------+--------+----------+----------+------------+--------+------------+--------+
 |  1001 | Allen  | Salesman |     1005 | 1981-06-01 |   1600 |        300 |     30 |
 |  1003 | Ward   | Salesman |     1005 | 1981-02-22 |   1250 |        500 |     30 |
 |  1005 | Martin | Salesman |     1006 | 1981-09-28 |   1250 |       1400 |     30 |
 +-------+--------+----------+----------+------------+--------+------------+--------+

 7. List dname and department number in department name order
SELECT deptname, deptno FROM Department ORDER BY deptname;

 Output:
 +------------+--------+
 | deptname   | deptno |
 +------------+--------+
 | Accounting |     10 |
 | IT         |     50 |
 | Marketing  |     40 |
 | Research   |     20 |
 | Sales      |     30 |
 +------------+--------+

 8. List the employee details in department 10 and 20
SELECT * FROM Employee WHERE deptno IN (10, 20);

 Output:
 +-------+-------+---------+----------+------------+--------+------------+--------+
 | empno | ename | JOB     | managerid| hiredate   | salary | commission | deptno |
 +-------+-------+---------+----------+------------+--------+------------+--------+
 |  1002 | Smith | Clerk   |     1006 | 1987-12-09 |    800 |       NULL |     20 |
 |  1004 | Jones | Manager |     1007 | 1981-04-02 |   2975 |       NULL |     20 |
 +-------+-------+---------+----------+------------+--------+------------+--------+

 9. List names and jobs of all clerks in dept 20
SELECT ename, job FROM Employee WHERE job='Clerk' AND deptno=20;

 Output:
 +-------+-------+
 | ename | job   |
 +-------+-------+
 | Smith | Clerk |
 +-------+-------+

 10. Display all employee names which have TH or LL in name
SELECT ename FROM Employee WHERE ename LIKE '%TH%' OR ename LIKE '%LL%';

 Output:
 +-------+
 | ename |
 +-------+
 | Allen |
 | Smith |
 +-------+

 11. List name,job,and salary of all employees who have a manager
SELECT ename, job, salary FROM Employee WHERE managerid IS NOT NULL;

 Output:
 +--------+----------+--------+
 | ename  | job      | salary |
 +--------+----------+--------+
 | Allen  | Salesman |   1600 |
 | Smith  | Clerk    |    800 |
 | Ward   | Salesman |   1250 |
 | Jones  | Manager  |   2975 |
 | Martin | Salesman |   1250 |
 +--------+----------+--------+

 12. Display name and annual remuneration for all employees
SELECT ename, (salary * 12 + IFNULL(commission,0)) AS annual_remuneration FROM Employee;

 Output:
 +--------+---------------------+
 | ename  | annual_remuneration |
 +--------+---------------------+
 | Allen  |               19500 |
 | Smith  |                9600 |
 | Ward   |               15500 |
 | Jones  |               35700 |
 | Martin |               16400 |
 +--------+---------------------+

 13. Display all employees hired during 1987
SELECT * FROM Employee WHERE YEAR(hiredate) = 1987;

 Output:
 +-------+-------+-------+----------+------------+--------+------------+--------+
 | empno | ename | JOB   | managerid| hiredate   | salary | commission | deptno |
 +-------+-------+-------+----------+------------+--------+------------+--------+
 |  1002 | Smith | Clerk |     1006 | 1987-12-09 |    800 |       NULL |     20 |
 +-------+-------+-------+----------+------------+--------+------------+--------+

 14. Display name,job,annual sal,commission of all sales peoples whose monthly salary greater than commission
SELECT ename, job, (salary*12) AS annual_sal, commission
FROM Employee
WHERE job='Salesman' AND salary > IFNULL(commission, 0)
ORDER BY salary DESC;

 Output:
 +-------+----------+------------+------------+
 | ename | job      | annual_sal | commission |
 +-------+----------+------------+------------+
 | Allen | Salesman |      19200 |        300 |
 | Ward  | Salesman |      15000 |        500 |
 +-------+----------+------------+------------+

 15. List the employee name and salary increased by 12.5%. Express as a whole number
SELECT ename, ROUND(salary * 1.125) AS increased_salary FROM Employee;

 Output:
 +--------+-----------------+
 | ename  | increased_salary |
 +--------+-----------------+
 | Allen  |            1800 |
 | Smith  |             900 |
 | Ward   |            1406 |
 | Jones  |            3347 |
 | Martin |            1406 |
 +--------+-----------------+

 16. Produce the following output: EMPLOYEE AND JOB SMITH CLERK ALLEN SALESMAN
SELECT CONCAT(ename, ' ', job) AS "EMPLOYEE AND JOB" 
FROM Employee 
WHERE ename IN ('SMITH', 'ALLEN') 
ORDER BY ename DESC;

 Output:
 +--------------------+
 | EMPLOYEE AND JOB   |
 +--------------------+
 | Smith Clerk        |
 | Allen Salesman     |
 +--------------------+

 17. Produce the following output: EMPLOYEE AND JOB SMITH(Clerk) ALLEN(Salesman)
SELECT CONCAT(ename, '(', job, ')') AS "EMPLOYEE AND JOB" 
FROM Employee 
WHERE ename IN ('SMITH', 'ALLEN') 
ORDER BY ename DESC;

 Output:
 +---------------------+
 | EMPLOYEE AND JOB    |
 +---------------------+
 | Smith(Clerk)        |
 | Allen(Salesman)     |
 +---------------------+

 18. Find minimum, maximum and average salary from employee table
SELECT MIN(salary), MAX(salary), AVG(salary) FROM Employee;

 Output:
 +-------------+-------------+-------------+
 | MIN(salary) | MAX(salary) | AVG(salary) |
 +-------------+-------------+-------------+
 |         800 |        2975 | 1575.0000   |
 +-------------+-------------+-------------+

 19. Find minimum and maximum salary group by job title
SELECT job, MIN(salary), MAX(salary) FROM Employee GROUP BY job;

 Output:
 +----------+-------------+-------------+
 | job      | MIN(salary) | MAX(salary) |
 +----------+-------------+-------------+
 | Clerk    |         800 |         800 |
 | Manager  |        2975 |        2975 |
 | Salesman |        1250 |        1600 |
 +----------+-------------+-------------+

 20. Count the number of managers in employee table
SELECT COUNT(*) FROM Employee WHERE job = 'Manager';

 Output:
 +----------+
 | COUNT(*) |
 +----------+
 |        1 |
 +----------+

 21. Calculate average salary and average total salary by job
SELECT job, AVG(salary) AS avg_salary,
AVG(salary + IFNULL(commission, 0)) AS avg_total
FROM Employee
GROUP BY job;

 Output:
 +----------+------------+------------+
 | job      | avg_salary | avg_total  |
 +----------+------------+------------+
 | Clerk    |  800.0000  |  800.0000  |
 | Manager  | 2975.0000  | 2975.0000  |
 | Salesman | 1366.6667  | 1633.3333  |
 +----------+------------+------------+

 22. Find the difference between maximum salary and minimum salary in employee table
SELECT MAX(salary) - MIN(salary) AS salary_difference FROM Employee;

 Output:
 +-------------------+
 | salary_difference |
 +-------------------+
 |              2175 |
 +-------------------+

 23. List number of employees per department and job title where there are more than 2 employees
SELECT deptno, JOB, COUNT(*) as emp_count
FROM Employee
GROUP BY deptno,job
HAVING COUNT(*) > 2;

 Output:
 +--------+----------+-----------+
 | deptno | JOB      | emp_count |
 +--------+----------+-----------+
 |     30 | Salesman |         3 |
 +--------+----------+-----------+

 24. Count duplicate employee numbers
SELECT empno, COUNT(*)
FROM Employee
GROUP BY empno
HAVING COUNT(*) > 1;

Output:
Empty set (0.00 sec)

