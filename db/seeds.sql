INSERT INTO department (name)
VALUES ("Management"),
       ("Sales"),
       ("Accounting"),
       ("Customer Service"),
       ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 120000, 1),
       ("Sales Person", 70000, 2),
       ("Accountant", 90000, 3),
       ("Receptionist", 30000, 4),
       ("Warehouse Manager", 60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null),
       ("Dwight", "Schrute", 2, 1),
       ("Jim", "Halpert", 2, 1),
       ("Pam", "Beesly", 4, 1),
       ("Stanly", "Hudson", 3, 1),
       ("Darryl", "Philbin", 5, null);