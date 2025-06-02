1. Display employees who earn more than the lowest salary in department 30
SELECT * FROM Employee
WHERE salary > (
    SELECT MIN(salary) FROM Employee WHERE deptno = 30
);

+-------+-------+-----------+----------+------------+--------+------------+--------+
| empno | ename | JOB       | managerid | hiredate  | salary | commission | deptno |
+-------+-------+-----------+----------+------------+--------+------------+--------+
|  1001 | Allen | Salesman  |     1005 | 1981-06-01 |   1600 |        300 |     30 |
|  1004 | Jones | Manager   |     1007 | 1981-04-02 |   2975 |       NULL |     20 |
+-------+-------+-----------+----------+------------+--------+------------+--------+
2 rows in set (0.00 sec)

2. Find employees who earn more than every employee in department 30
SELECT * FROM Employee
WHERE salary > ALL (
    SELECT salary FROM Employee WHERE deptno = 30
);

+-------+-------+---------+----------+------------+--------+------------+--------+
| empno | ename | JOB     | managerid | hiredate  | salary | commission | deptno |
+-------+-------+---------+----------+------------+--------+------------+--------+
|  1004 | Jones | Manager |     1007 | 1981-04-02 |   2975 |       NULL |     20 |
+-------+-------+---------+----------+------------+--------+------------+--------+
1 row in set (0.00 sec)

3. Find the job with the highest average salary
SELECT job
FROM Employee
GROUP BY job
ORDER BY AVG(salary) DESC LIMIT 1;

+---------+
| job     |
+---------+
| Manager |
+---------+
1 row in set (0.00 sec)

4. Find departments not having any employees
SELECT * FROM Department
WHERE deptno NOT IN (SELECT DISTINCT deptno FROM Employee);

+--------+------------+----------+
| deptno | deptname   | location |
+--------+------------+----------+
|     10 | Accounting | US       |
|     40 | Marketing  | US       |
|     50 | IT         | US       |
+--------+------------+----------+
3 rows in set (0.00 sec)

5. Display the name and salary of the top three earners in the company
SELECT ename, salary
FROM Employee
ORDER BY salary DESC
LIMIT 3;

+--------+--------+
| ename  | salary |
+--------+--------+
| Jones  |   2975 |
| Allen  |   1600 |
| Martin |   1250 |
+--------+--------+
3 rows in set (0.00 sec)

6. Find employees who earn more than the average salary of their department
SELECT e.*
FROM Employee e
WHERE salary > (
    SELECT AVG(salary) 
    FROM Employee 
    WHERE deptno = e.deptno
);

+-------+-------+-----------+----------+------------+--------+------------+--------+
| empno | ename | JOB       | managerid | hiredate  | salary | commission | deptno |
+-------+-------+-----------+----------+------------+--------+------------+--------+
|  1001 | Allen | Salesman  |     1005 | 1981-06-01 |   1600 |        300 |     30 |
|  1004 | Jones | Manager   |     1007 | 1981-04-02 |   2975 |       NULL |     20 |
+-------+-------+-----------+----------+------------+--------+------------+--------+
2 rows in set (0.00 sec)

7. Find the department with the highest total salary expenditure
SELECT d.deptname, SUM(e.salary) AS total_salary
FROM Department d
JOIN Employee e ON d.deptno = e.deptno
GROUP BY d.deptname
ORDER BY total_salary DESC
LIMIT 1;

+----------+--------------+
| deptname | total_salary |
+----------+--------------+
| Sales    |         4100 |
+----------+--------------+
1 row in set (0.00 sec)

8. Find employees who have the same job as their manager
SELECT e.*
FROM Employee e
JOIN Employee m ON e.managerid = m.empno
WHERE e.job = m.job;

Empty set (0.00 sec)

9. List employees who earn more than their department's average salary but less than the company's maximum salary
SELECT e.*
FROM Employee e
WHERE salary > (
    SELECT AVG(salary) 
    FROM Employee 
    WHERE deptno = e.deptno
)
AND salary < (SELECT MAX(salary) FROM Employee);

+-------+-------+-----------+----------+------------+--------+------------+--------+
| empno | ename | JOB       | managerid | hiredate  | salary | commission | deptno |
+-------+-------+-----------+----------+------------+--------+------------+--------+
|  1001 | Allen | Salesman  |     1005 | 1981-06-01 |   1600 |        300 |     30 |
+-------+-------+-----------+----------+------------+--------+------------+--------+
1 row in set (0.00 sec)

10. Find the second highest salary in the company
SELECT MAX(salary) AS second_highest_salary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);

+----------------------+
| second_highest_salary |
+----------------------+
|                 1600 |
+----------------------+
1 row in set (0.00 sec)
