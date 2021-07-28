-- to show all info
SELECT employee.id AS ID, CONCAT(first_name, ' ', last_name) AS Name, title AS Title, department.name AS Department, salary AS Salary, manager_id AS Manager_ID
FROM employee 
INNER JOIN role 
ON role.id = employee.role_id 
INNER JOIN department 
ON role.department_id = department.id;
