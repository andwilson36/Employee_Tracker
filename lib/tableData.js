const express = require('express');
const db = require('./connection');

function ViewAll() {}

ViewAll.prototype.employees = function(response, obj) {
    switch (response) {
        case 'View All Employees':
            db.query(`
                SELECT employee.id AS ID, CONCAT(first_name, ' ', last_name) AS Name, title AS Title, department.name AS Department, salary AS Salary, manager_id AS Manager_ID
                FROM employee 
                INNER JOIN role 
                ON role.id = employee.role_id 
                INNER JOIN department 
                ON role.department_id = department.id;`,
                function(err, results) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('');
                    console.table(results);
                    console.log('Use arrow keys to view menu');
                    console.log('');
                    for (let i = 0; i < results.length; i++) {
                        console.log('')
                    }
                })
            break;
        case 'Add Employee':
            db.query(`
                INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${obj.first_name}", "${obj.last_name}", ${obj.role_id}, ${obj.manager_id});       
            `)
            break;
        case 'Update Employee Role':
            db.query(`
                UPDATE employee SET role_id = ${obj.newID} WHERE id = ${obj.selected_employee};
            `)
    }
}

module.exports = ViewAll;