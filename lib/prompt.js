const menuQuestions = [{
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: ['View Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}]

const menuViewEmployees = [{
    type: 'list',
    name: 'menu',
    message: 'Pick how you want to view employees:',
    choices: ['View All Employees', 'View by Manager', 'View by Department']
}]

module.exports = { menuQuestions, menuViewEmployees }