const inquirer = require('inquirer');

function Prompt() {}

Prompt.prototype.cmdLinePrompt = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        },
    ])
}

module.exports = Prompt;