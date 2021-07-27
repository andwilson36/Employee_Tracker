const inquirer = require('inquirer');

function Prompt() {}

var choice;

Prompt.prototype.menuPrompt = function() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        }])
        .then((response) => {
            const result = response.menu;
            switch (result) {
                case 'View All Employees':
                    return 'View All Employees';
                case 'Add Employee':
                    return 'Add Employee';
                case 'Update Employee Role':
                    return 'Update Employee Role';
                case 'View All Roles':
                    return 'View All Roles';
                case 'Add Role':
                    return 'Add Role';
                case 'View All Departments':
                    return 'View All Departments';
                case 'Add Department':
                    return 'Add Department';
                case 'Quit':
                    choice = 'Quit';
                    return 'Quit';
            }
        })
}

module.exports = { choice };
module.exports = Prompt;