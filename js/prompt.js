const inquirer = require('inquirer');

function Prompt() {}

Prompt.prototype.menuPrompt = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            }
        ])
        .then((response) => {
            const result = response.menu;
            switch (result) {
                case 'View All Employees':
                    console.log('View All Employees');
                    break;
                case 'Add Employee':
                    console.log('Add Employee');
                    break;
                case 'Update Employee Role':
                    console.log('Update Employee Role');
                    break;
                case 'View All Roles':
                    console.log('View All Roles');
                    break;
                case 'Add Role':
                    console.log('Add Role');
                    break;
                case 'View All Departments':
                    console.log('View All Departments');
                    break;
                case 'Add Department':
                    console.log('Add Department');
                    break;
                case 'Quit':
                    console.log('Quit');
                    break;
            }
        })
}

module.exports = Prompt;